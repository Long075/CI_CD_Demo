import { test, expect } from '@playwright/test';

const token = process.env.API_TOKEN;
console.log(token);

test('API GET Request', async ({request}) => {
    const response = await request.get(`http://118.70.81.203:8010/api/users/C1442FA0-99D3-11F0-8D36-198242D8A96B`, {
        headers: {Authorization: `Bearer ${token}`}
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
})