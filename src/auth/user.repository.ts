import { EntityRepository, Repository } from 'typeorm';

import User from './user.entity';

@EntityRepository()
export default class UserRepository extends Repository<User> {}
