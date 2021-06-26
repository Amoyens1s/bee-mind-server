import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { NodeDTO } from '../dto/node.dto';
import { API } from '../api';

@Controller('node')
export class NodeController {
  constructor(private api: API) {}

  @Get('all')
  async getAllNodes(@Res() res: Response) {
    const result = await this.api.getAllNodes();
    return res.status(HttpStatus.OK).json(result);
  }

  @Get(':id')
  async getNodeById(@Res() res: Response, @Param('id') id: string) {
    const result = await this.api.getNodeById(id);
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('')
  @ApiBody({ type: NodeDTO })
  @ApiOkResponse({
    description: 'The node has been successfully created.',
  })
  async addNode(@Body() node: NodeDTO, @Res() res: Response) {
    const result = await this.api.addNode(node);
    return res.status(HttpStatus.OK).json(result);
  }
}
