import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as dynamoose from 'dynamoose'
// import { ExpressAdapter } from '@nestjs/platform-express';
// import { INestApplication } from '@nestjs/common';
// import { Express } from 'express';
// import { Server } from 'http';
// import { Context } from 'aws-lambda';
// import { createServer, proxy, Response } from 'aws-serverless-express';
// import * as express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
async function bootstrap () {
  dynamoose.aws.sdk.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION_NAME
  })
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()

// let cachedServer: Server;
// async function createExpressApp(
//   expressApp: Express,
// ): Promise<INestApplication> {
//   const app = await NestFactory.create(
//     AppModule,
//     new ExpressAdapter(expressApp),
//   );
//   return app;
// }
// async function bootstrap(): Promise<Server> {
//   dynamoose.aws.sdk.config.update({
//     accessKeyId: process.env.ACCESS_KEY,
//     secretAccessKey: process.env.SECRET_ACCESS_KEY,
//     region: process.env.REGION_NAME,
//   });
//   const expressApp = express();
//   const app = await createExpressApp(expressApp);
//   await app.init();
//   return createServer(expressApp);
// }
// export async function handler(event: any, context: Context): Promise<Response> {
//   if (!cachedServer) {
//     const server = await bootstrap();
//     cachedServer = server;
//   }
//   return proxy(cachedServer, event, context, 'PROMISE').promise;
// }
