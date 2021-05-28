import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleEntity } from '../../entities/article.entity';
import { CreateArticleDto, UpdateArticleDto } from '../../dtos/article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment';

@Injectable()
export class ArticlesService {
  private counter = 0;
  private articles: ArticleEntity[] = [
    {
      id: 1,
      title: 'Test Article',
      description: 'Basic article',
      journalist: 'Albert Salas',
      published: true,
      category: 'Judicial',
      createdAt: '02/02/2020',
      hour: '20hrs',
      image: 'url',
      resume: 'Resume',
    },
  ];

  constructor(
    @InjectRepository(ArticleEntity)
    private articleRepo: Repository<ArticleEntity>,
  ) {}

  getAll() {
    return this.articleRepo.find();
  }

  /**
   * Returns the an specific article by @param id from db
   *
   * @param id - The first input number
   * @returns The element with the specified id
   * @example Not available
   *
   * @beta
   */
  find(id: number) {
    const article = this.articleRepo.findOne(id);
    if (article) return article;
    throw new NotFoundException(`Article ${id} not found`);
  }

  /**
   * Creates an Article in the db
   *
   * @param payload - Article post Object
   * @returns The created element
   * @example Not available
   *
   * @beta
   */
  create(payload: CreateArticleDto) {
    const newArticle = this.articleRepo.create(payload);
    newArticle.createdAt = moment().format('MMM Do YY');
    newArticle.hour = moment().format('hh:mm:ss a');
    return this.articleRepo.save(newArticle);
  }

  /**
   * Updates an Article in the db
   * TODO: Improve and manage the error response
   * @param id - Article id
   * @param payload - Article post Object
   * @returns The Updated element
   * @example Not available
   *
   * @beta
   */
  async update(id: number, payload: UpdateArticleDto) {
    const article = await this.find(id);
    this.articleRepo.merge(article, payload);
    return this.articleRepo.save(article);
  }

  /**
   * Deletes an Article in the db
   *
   * @param id - Article id
   * @returns The Updated element
   * @example Not available
   *
   * @beta
   */
  delete(id: number) {
    return this.articleRepo.delete(id);
  }
}
