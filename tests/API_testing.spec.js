import { test, expect } from '@playwright/test';

let userId; //  store the created user ID

test.describe('Reqres API Automation', () => {

  test('Create  a new user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: { "name": "liya", "job": "student" },
      headers: { 'x-api-key': 'reqres-free-v1' }
    });

    console.log(await response.json());
    expect(response.status()).toBe(201);//validation of new user creation

    var res = await response.json();
    userId = res.id;
  });

  test('Get user details', async ({ request }) => {
    // Use a static user ID that exists in Reqres
    const response = await request.get('https://reqres.in/api/users/2', {
      headers: { 'x-api-key': 'reqres-free-v1' }
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Get User Response:', body);

    // Validate against known data for user 2
    expect(body.data).toHaveProperty("id", 2);
    expect(body.data).toHaveProperty("email");
  });

  test('Update created user', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/' + userId, {
      data: { "name": "kumar", "job": "engineer" },
      headers: { 'x-api-key': 'reqres-free-v1' }
    });

    console.log(await response.json());
    expect(response.status()).toBe(200);//valiadation of user update
  });

});
