import {ComponentMetadata} from "@alilc/lowcode-types";
import snippets from './snippets';
import {ChildrenPropF, TargetProp} from "../_base/prop";

export default {
  snippets,
  componentName: 'Typography.Link',
  title: '链接',
  category: '通用',
  props: [
    ChildrenPropF({node: true}),
    {
      name: 'href',
      title: {label: '跳转链接', tip: '跳转链接'},
      propType: 'string',
      defaultValue: '',
    },
    {
      ...TargetProp,
    },
  ],
  configure: {supports: {style: true}},
} as ComponentMetadata | any;
