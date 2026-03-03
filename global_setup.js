import { request } from '@playwright/test';
import fs from 'fs';

async function globalSetup() {
  const context = await request.newContext();
  console.log(process.env.API_USERNAME)
  console.log(process.env.API_PASSWORD);
  const res = await context.post('http://118.70.81.203:8010/api/login', {
    data: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD
    }
  });
  const body = await res.json();
  if (body.status == "error"){
    throw new Error('Login thất bại ở Global setup');
  }

  
  const token = body.data.access_token;
  fs.writeFileSync('token.json', JSON.stringify({ token }));
}

export default globalSetup;