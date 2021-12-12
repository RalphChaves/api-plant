import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CrendentialsDto } from './dto/credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private database: PrismaService, private jwt: JwtService) {}

  async login(dadosDoLogin: CrendentialsDto) {
    const usuarioExiste = await this.database.user.findUnique({
      where: { email: dadosDoLogin.email },
    });

    if (!usuarioExiste) {
      throw new NotFoundException('Usuario não existe');
    }

    const hashPassLogin = await bcrypt.compare(
      dadosDoLogin.senha,
      usuarioExiste.senha,
    );

    if (hashPassLogin) {
      const payload = {
        email: usuarioExiste.email,
      };

      const token = await this.jwt.sign(payload);

      return { token };
    } else {
      throw new UnauthorizedException('Credenciais Invalidas');
    }
  }
}
