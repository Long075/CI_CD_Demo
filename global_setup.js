import { request } from '@playwright/test';

async function globalSetup() {
  const context = await request.newContext();

  const res = await context.post('http://118.70.81.203:8010/api/login', {
    data: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }
  });
  if (!res.ok()){
    throw new Error('Login thất bại ở Global setup');
  }

  const body = await res.json();
  process.env.API_TOKEN = body.data.access_token;
}

export default globalSetup;