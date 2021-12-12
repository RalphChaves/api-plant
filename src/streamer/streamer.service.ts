import {
  NotFoundException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';
import { PrismaService } from 'src/prisma.service';
import { Streamer } from '@prisma/client';

@Injectable()
export class StreamerService {
  constructor(private database: PrismaService) {}

  async create(dadosDoStreamer: CreateStreamerDto): Promise<Streamer> {
    const tituloExiste = await this.database.streamer.findUnique({
      where: { titulo: dadosDoStreamer.titulo },
    });

    if (tituloExiste) {
      throw new ConflictException('Esse titulo ja foi cadastrado');
    }

    const streamer = await this.database.streamer.create({
      data: dadosDoStreamer,
    });

    return streamer;
  }

  async findAll(): Promise<Streamer[]> {
    const streamers = await this.database.streamer.findMany();
    return streamers;
  }

  async findOne(id: string): Promise<Streamer> {
    const tituloExiste = await this.database.streamer.findUnique({
      where: { id },
    });

    if (!tituloExiste) {
      throw new NotFoundException(
        'Streamer com o ID informado nao foi encontrado!',
      );
    }

    return tituloExiste;
  }

  async update(
    id: string,
    updateStreamerDto: UpdateStreamerDto,
  ): Promise<Streamer> {
    const streamer = await this.database.streamer.update({
      where: { id },
      data: updateStreamerDto,
    });
    return streamer;
  }

  async remove(id: string): Promise<{ message: string }> {
    const tituloExiste = await this.database.streamer.findUnique({
      where: { id },
    });

    if (!tituloExiste) {
      throw new NotFoundException(
        'Streamer com o ID informado nao foi encontrado!',
      );
    } else {
      await this.database.streamer.delete({
        where: { id },
      });
    }

    return { message: 'ID foi encontrado e deletado' };
  }
}
