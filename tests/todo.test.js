const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const Todo = require('../models/Todo');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL);
});

afterEach(async () => {
    await Todo.deleteMany();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Todo API', () => {
    test('Create Todo', async () => {
        const res = await request(app)
            .post('/api/todos')
        expect(res.statusCode).toBe(201);
        expect(res.body.message).toBe(json);

    });

    test('Get Todos', async () => {
        await Todo.create({ title: 'Test Todo' });
        const res = await request(app).get('/api/todos');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    test('Update Todo', async () => {
        const todo = await Todo.create({ title: 'Test Todo' });
        const res = await request(app)
            .put(`/api/todos/${todo._id}`)
            .send({ title: 'Updated Todo' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Updated Todo');
    });

    test('Delete Todo', async () => {
        const todo = await Todo.create({ title: 'Test Todo' });
        const res = await request(app).delete(`/api/todos/${todo._id}`);
        expect(res.statusCode).toEqual(200);
    });
});
