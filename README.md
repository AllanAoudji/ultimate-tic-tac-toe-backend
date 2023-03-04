# Default Backend repo for nodejs

## Using nodejs, typescript, nodemon, eslin, prettier, webpack, husky, jest

### Script

1. build
build production folder (./build)

2. dev
run nodemon with NODE_ENV=development

3. lint
lint src/ and __tests__

4. lint:fix
lint and fix src/ and __tests__

5. test
run tests

6. test:watch
watch tests

7. test:coverage
cover tests

8. prepare
husky install

### Rework
1. Change webpack.config.js to webpack.config.ts
https://www.hkitlifeshare.com/post/express-typescript-eslint-webpack5-setup

2. Add supertest to test server
https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/