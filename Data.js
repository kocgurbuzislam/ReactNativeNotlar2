import { faker } from '@faker-js/faker';

export const DATA = Array(5).fill(null).map(e=>({
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    user: faker.person.fullName(),
    email: faker.internet.email(),

    data: Array(2).fill(null).map((e)=>({
        id: faker.string.uuid(),
        text: faker.lorem.paragraph(),
        date: faker.date.past(),
    }))
}))