import { PropConfig } from "@alilc/lowcode-types";
import { SetterType } from "@alilc/lowcode-types/lib/setter-config";

export const TargetProp = {
  name: 'target',
  title: {
    label: 'Target',
    tip: 'target | 相当于 a 链接的 target 属性，href 存在时生效',
  },
  propType: {
    type: 'oneOf',
    value: ['_self', '_blank', '_parent', '_top'],
  },
  setter: [
    {
      componentName: 'SelectSetter',
      props: {
        options: [
          {
            title: '本窗口跳转',
            value: '_self',
          },
          {
            title: '打开新标签页',
            value: '_blank',
          },
          {
            title: '父窗口跳转',
            value: '_parent',
          },
          {
            title: '顶层窗口跳转',
            value: '_top',
          },
        ],
      },
    },
    'StringSetter',
    'VariableSetter',
  ],
  defaultValue: '_self',
} as PropConfig;


export const ChildrenPropF = (args: { node: boolean } = { node: false }) => {


  let setter = ['StringSetter', 'VariableSetter']
  let propType: any = 'string'
  if (args.node) {
    propType = {
      type: 'oneOfType',
      value: ['node', 'string'],
    }
    setter.push("SlotSetter")
  }
  return {
    name: 'children',
    title: {
      label: '内容',
      tip: 'children | 内容',
    },
    propType,
    setter
  } as PropConfig;

}


