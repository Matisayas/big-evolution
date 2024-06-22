import { Injectable } from '@nestjs/common';
import { RoleEnum, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { GqlCreateUserInput, GqlUpdateUserInput } from 'src/generated/graphql';

export interface CreateUserInput extends GqlCreateUserInput {
  role: RoleEnum;
  organizationId: number;
}

export interface UpdateUserInput extends GqlUpdateUserInput {
  organizationId: number;
}

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  create(organizationId: number, input: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: input.name,
        surname: input.surname,
        email: input.email,
        password: input.password,
        role: input.role,
        organizationId: organizationId,
      },
    });
  }

  async findOneByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  findAll(organizationId: number): Promise<User[]> {
    return this.prisma.user.findMany({
      orderBy: { id: 'desc' },
      where: {
        active: true,
        organizationId,
      },
    });
  }

  findOne(organizationId: number, id: number): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        active: true,
        id,
        organizationId,
      },
    });
  }

  update(
    organizationId: number,
    id: number,
    input: UpdateUserInput,
  ): Promise<User> {
    return this.prisma.user.update({
      where: {
        id,
        organizationId,
      },
      data: {
        name: input.name,
        surname: input.surname,
      },
    });
  }

  remove(organizationId: number, id: number): Promise<User> {
    return this.prisma.user.update({
      where: {
        id,
        organizationId,
      },
      data: {
        active: false,
      },
    });
  }
}
