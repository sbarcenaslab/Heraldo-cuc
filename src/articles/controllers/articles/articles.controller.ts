import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { ArticlesService } from '../../services/articles/articles.service';
import { CreateArticleDto, UpdateArticleDto } from '../../dtos/article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticlesService) {}

  /**
   * Returns the an specific article by @param id
   *
   * @param id - The first input number
   * @returns The element with the specified id
   * @example Not available
   *
   * @beta
   */
  @Get(':id')
  getArticle(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.find(id);
  }

  /**
   * Returns The list of articles
   *
   * @returns The list of articles
   * @example Not available
   *
   */
  @Get()
  getArticles() {
    return this.articleService.getAll();
  }

  /**
   * Creates an article
   *
   * @returns The data from the added article
   * @example Not available
   *
   */
  @Post()
  createArticle(@Body() payload: CreateArticleDto) {
    return this.articleService.create(payload);
  }

  /**
   * Edits an article
   *
   * @returns The data from the modified article
   * @example Not available
   *
   */
  @Put(':id')
  putArticle(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateArticleDto,
  ) {
    return this.articleService.update(id, payload);
  }

  /**
   * Deletes an article
   *
   * @returns The data from the removed article
   * @example Not available
   *
   */
  @Delete(':id')
  deleteArticle(@Param('id', ParseIntPipe) id: number) {
    return {
      value: id,
    };
  }
}
