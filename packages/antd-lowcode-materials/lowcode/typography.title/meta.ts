import { ComponentMetadata } from "@alilc/lowcode-types";
import snippets from './snippets';
import { BaseTypographyAttr } from "../typography/base";

export default {
  snippets,
  componentName: 'Typography.Title',
  title: '标题',
  category: '通用',
  props: [
    ...BaseTypographyAttr.baseProps,
    {
      name: 'level',
      title: { label: '重要程度', tip: '重要程度(1-5)' },
      propType: { type: 'oneOf', value: [1, 2, 3, 4, 5] },
      defaultValue: 1,
    },
    ...BaseTypographyAttr.seniorProps,


  ],
  configure: BaseTypographyAttr.configure
} as ComponentMetadata | any;
