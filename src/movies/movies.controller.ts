import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie made after ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `This will return one movie 아이디값은 : ${id}`;
  }

  @Post()
  create(@Body() movieData: object) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie the id: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateData: movieId,
      ...updateData,
    };
  }
}
