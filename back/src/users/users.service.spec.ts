import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./create-user.entity";
describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  const mockUserRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      dateOfBirth: new Date('1990-01-01'),
      city: 'New York',
      postalCode: '12345',
    };

    const user = { id: 1, ...createUserDto };
    mockUserRepository.create.mockReturnValue(user);
    mockUserRepository.save.mockResolvedValue(user);

    const result = await service.create(createUserDto);

    expect(repository.create).toHaveBeenCalledWith(createUserDto);
    expect(repository.save).toHaveBeenCalledWith(user);
    expect(result).toEqual(user);
  });

  it('should return an array of users', async () => {
    const users = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      },
    ];
    mockUserRepository.find.mockResolvedValue(users);

    const result = await service.findAll();

    expect(repository.find).toHaveBeenCalled();
    expect(result).toEqual(users);
  });
});