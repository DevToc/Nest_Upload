import { Controller,Get,Post ,Param,Body} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  getCats() {
    const cats =  this.catsService.getCats();
    return cats;
  }
  @Get(':catId')
  getcat(@Param('catId') catId) {
      const cat =  this.catsService.getCat(catId);
      return cat;
  }

  @Post()
  async addcat(@Body() createcatDto: CreateCatDto) {
      const cat = await this.catsService.addCat(createcatDto);
      return cat;
  }
}
