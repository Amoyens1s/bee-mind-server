import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NodeController } from './controller/node.controller';
import { API } from './api';
import { NodeSchema } from './node.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'node', schema: NodeSchema }])],
  controllers: [NodeController],
  providers: [API],
})
export class NodeModule {}
