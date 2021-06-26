import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NodeDTO } from './dto/node.dto';
import { Node } from './node.interface';

@Injectable()
export class API {
  constructor(@InjectModel('node') private readonly nodeModel: Model<Node>) {}

  /**
   * Gets all nodes
   * @returns all nodes
   */
  async getAllNodes(): Promise<Node[]> {
    const result = await this.nodeModel.find().exec();
    return result;
  }

  /**
   * Gets node by id
   * @param id node id
   * @returns node by id
   */
  async getNodeById(id: string): Promise<Node> {
    const result = await this.nodeModel.findById(id).exec();
    return result;
  }

  /**
   * Add node
   * @param node node body
   * @returns node
   */
  async addNode(node: NodeDTO): Promise<Node> {
    const result = new this.nodeModel(node);
    return result.save();
  }

  /**
   * Deletes node by id
   * @param id node id
   * @returns any
   */
  async deleteNodeById(id: string): Promise<any> {
    const result = await this.nodeModel.findByIdAndDelete(id);
    return result;
  }
}
