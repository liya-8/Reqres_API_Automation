# Reqres API Automation

This project contains automated API tests for the [Reqres](https://reqres.in/) demo API using Playwright.

## Features
- **Create a new user:**
  - Sends a POST request to create a user.
  - Validates the response status code (201).
  - Stores the returned userId.
- **Get user details:**
  - Sends a GET request for a static user (ID 2).
  - Validates the response and checks for expected properties.
- **Update created user:**
  - Sends a PUT request to update the user's name and job.
  - Validates the response status code (200).

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npx playwright test
   ```

## Notes
- The Reqres API does not persist users created with POST. Only static users (like ID 2) can be fetched with GET.
- The PUT request returns a mock response and does not update real data.

## File Structure
- `tests/API_testing.spec.js` - Contains all API test cases.

## Requirements
- Node.js
- Playwright

## Author
- Liya Sosa Varkey
