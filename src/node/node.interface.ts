/**
 * 单个节点对象结构
 */
export interface Node {
  readonly content: string;
  readonly img?: string;
  readonly ancestor?: string;
  readonly descendant: string[];
  readonly link: string[];
}
