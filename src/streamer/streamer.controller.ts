import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StreamerService } from './streamer.service';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';
import { Streamer } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('streamer')
export class StreamerController {
  constructor(private readonly streamerService: StreamerService) {}

  @UseGuards(AuthGuard())
  @Post('create')
  async create(
    @Body() createStreamerDto: CreateStreamerDto,
  ): Promise<Streamer> {
    return await this.streamerService.create(createStreamerDto);
  }

  // @UseGuards(AuthGuard()) optei por deixar ver senha
  @Get('get-all')
  findAll(): Promise<Streamer[]> {
    return this.streamerService.findAll();
  }

  @UseGuards(AuthGuard())
  @Get('find-one/:id')
  findOne(@Param('id') id: string): Promise<Streamer> {
    return this.streamerService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateStreamerDto: UpdateStreamerDto,
  ): Promise<Streamer> {
    return this.streamerService.update(id, updateStreamerDto);
  }

  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.streamerService.remove(id);
  }
}
