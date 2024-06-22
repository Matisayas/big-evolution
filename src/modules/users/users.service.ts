import { Injectable } from '@nestjs/common';
import { RoleEnum } from '@prisma/client';
import * as bcryptjs from 'bcryptjs';
import { GqlUser } from 'src/generated/graphql';
import {
  CreateUserInput,
  UpdateUserInput,
  UsersRepository,
} from './users.repo';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findOneByEmail(email: string) {
    return this.userRepository.findOneByEmail(email);
  }

  async create(organizationId: number, input: CreateUserInput, role: RoleEnum) {
    const hashedPassword = await bcryptjs.hash(input.password, 10);

    return this.userRepository.create(organizationId, {
      password: hashedPassword,
      name: input.name,
      surname: input.surname,
      phone: input.phone,
      organizationId: organizationId,
      role,
      email: input.email,
    });
  }

  findAll(organizationId: number): Promise<GqlUser[]> {
    return this.userRepository.findAll(organizationId);
  }

  findOne(organizationId: number, id: number): Promise<GqlUser> {
    return this.userRepository.findOne(organizationId, id);
  }

  update(
    organizationId: number,
    id: number,
    input: UpdateUserInput,
  ): Promise<GqlUser> {
    return this.userRepository.update(organizationId, id, input);
  }

  remove(organizationId: number, id: number): Promise<GqlUser> {
    return this.userRepository.remove(organizationId, id);
  }
}
