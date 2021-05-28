import { Module } from '@nestjs/common';
import { ArticlesController } from './controllers/articles/articles.controller';
import { ArticlesService } from './services/articles/articles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './entities/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
