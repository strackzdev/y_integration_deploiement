import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./create-user.entity";

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: { // Mock implementation of UsersService
            findAll: jest.fn().mockResolvedValue([]), // Add more mock methods as necessary
            createUser: jest.fn().mockResolvedValue(new CreateUserDto()), // Adjust accordingly
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });
});
