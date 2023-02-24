This project is configured with dynamoose.
Crud nestjs app connect with aws platform including dynamodb, dynamoose orm.

## How to use it

First open the `main.ts` file and update the credentials with your own aws credentials.

```typescript
dynamoose.aws.sdk.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'REGION_NAME',
});
```

Now you can run the project using the following command

```bash
yarn start
```
