import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

/**
 * Create article - data transfer object
 * @export CreateArticleDto
 * @public
 *
 */
export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsString()
  @IsNotEmpty()
  readonly journalist: string;
  @IsBoolean()
  @IsNotEmpty()
  readonly published: boolean;
  @IsString()
  @IsNotEmpty()
  readonly category: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsString()
  @IsNotEmpty()
  readonly resume: string;
}

/**
 * Updaye article - data transfer object
 * @export UpdateArticleDto
 * @public
 *
 */
export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
