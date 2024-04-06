// ESM
import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    No: faker.number.int(30),
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100)
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 100
});
