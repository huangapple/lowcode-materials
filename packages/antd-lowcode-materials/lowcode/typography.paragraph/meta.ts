import { ComponentMetadata } from "@alilc/lowcode-types";
import snippets from './snippets';
import { BaseTypographyAttr } from "../typography/base";

export default {
  snippets,
  componentName: 'Typography.Paragraph',
  title: '段落',
  category: '通用',
  props: [
    ...BaseTypographyAttr.baseProps,
    {
      name: 'strong',
      title: { label: '是否加粗', tip: '是否加粗' },
      propType: 'bool',
      defaultValue: false,
    },
    ...BaseTypographyAttr.seniorProps,


  ],
  configure: BaseTypographyAttr.configure
} as ComponentMetadata | any;
