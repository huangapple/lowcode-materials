import { ComponentMetadata } from "@alilc/lowcode-types";
import snippets from './snippets';
import { ChildrenPropF } from "../_base/prop";
import { BaseTypographyAttr } from "../typography/base";

export default {
  snippets,
  componentName: 'Typography.Text',
  title: '文本',
  category: '通用',
  props: [
    ...BaseTypographyAttr.baseProps,
    {
      name: 'strong',
      title: { label: '是否加粗', tip: '是否加粗' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'keyboard',
      title: {label: '添加键盘样式', tip: '添加键盘样式'},
      propType: 'bool',
      defaultValue: false,
    },
    ...BaseTypographyAttr.seniorProps,

  ],
  configure: BaseTypographyAttr.configure
} as ComponentMetadata | any;
