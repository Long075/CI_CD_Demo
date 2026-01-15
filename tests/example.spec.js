import { test, expect } from '@playwright/test';

test('User CRUD flow testing', async ({ request }) => {
    //Thêm một user
    const getRes = await request.get('https://ca01e50c30cf83e7e6dd.free.beeceptor.com/api/users/', {
        data: {
            username: 'uia1',
            password: 'abc123',
            color: 'red'
        }
    });
    const body = await getRes.json();
    console.log(body);
    expect(getRes.status()).toBe(200);
})