import { test, expect } from '@playwright/test';

const token = process.env.API_TOKEN;
const baseURL = process.env.BASE_URL;
console.log(token);

test('API GET Request', async ({request}) => {
    const response = await request.get(`${baseURL}/C1442FA0-99D3-11F0-8D36-198242D8A96B`, {
        headers: {Authorization: `Bearer ${token}`}
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
})