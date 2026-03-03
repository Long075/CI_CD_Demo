import { test, expect } from '@playwright/test';
import fs from 'fs';

const tokenData = JSON.parse(fs.readFileSync('token.json', 'utf-8'));
const token = tokenData.token;
const baseURL = process.env.BASE_URL;

test('API GET Request', async ({request}) => {
    const response = await request.get(`${baseURL}/api/users/D876CEF0-A44E-11F0-9EBC-01783AC294FB`, {
        headers: {Authorization: `Bearer ${token}`}
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe("success");
})