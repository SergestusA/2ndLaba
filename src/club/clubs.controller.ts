import { Club } from './club.entity';
import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { ClubService } from './clubs.service';

@Controller('clubs')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Get()
  findAll(): Club[] {
    return this.clubService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Club {
    return this.clubService.findOne(id);
  }

  @Post()
  create(@Body() createClub: Club): Club {
    return this.clubService.create(createClub);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateClub: Club): Club {
    return this.clubService.update(id, updateClub);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.clubService.remove(id);
  }
}