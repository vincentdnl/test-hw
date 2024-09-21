# Test HW

## Install

Env file:

```bash
cd api/ 
cp .env.example .env
# replace with your Jobijoba API credentials
```

Install all dependencies:

```bash
npm run install:all
```
## Run

```bash
npm run start:all
```

## Tests

```bash
npm run test:all
```

## TODO

- [x] Handling loading state
- [x] Pagination
- [ ] Hardcoded job term query, should be provided by the user
- [ ] Handling errors from the external Jobijoba API
- [ ] Documenting endpoints (with `koa-swagger-decorator`?)