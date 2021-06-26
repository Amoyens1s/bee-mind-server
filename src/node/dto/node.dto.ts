import { ApiProperty } from '@nestjs/swagger';
import { Node } from '../node.interface';

export class NodeDTO implements Node {
  @ApiProperty({
    description: '思维导图节点中的内容',
    example: '思维导图节点中的内容',
    required: true,
    type: 'string',
  })
  readonly content: string;

  @ApiProperty({
    description: '思维导图节点中的图片url，一个节点仅限一张图片',
    example: 'vue.png',
    required: false,
    type: 'string',
  })
  readonly img?: string;

  @ApiProperty({
    description: '当前节点的父代节点ID，仅有一个，根节点不会携带此字段',
    example: '',
    required: false,
    type: 'string',
  })
  readonly ancestor?: string;

  @ApiProperty({
    description: '当前节点的后代节点ID列表',
    example: '',
    required: true,
    type: 'string[]',
  })
  readonly descendant: string[];

  @ApiProperty({
    description: '以当前节点为起点的关系线列表，指向目标节点ID',
    example: '',
    required: true,
    type: 'string[]',
  })
  readonly link: string[];
}
