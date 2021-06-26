import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NodeModule } from './node/node.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('BeeMind API 文档')
    .setDescription('BeeMind前后端接口文档')
    .setVersion('1.0')
    .addTag('docs')
    .build();

  const options: SwaggerDocumentOptions = {
    include: [NodeModule],
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
