import { ChildrenPropF } from "../_base/prop";

export const BaseTypographyAttr = {

  baseProps: [
    ChildrenPropF({ node: false }),
    {
      name: 'code',
      title: "添加代码样式",
      propType: 'bool',
      defaultValue: false,
      setter: ["VariableSetter", "BoolSetter"]
    },
    {
      name: 'delete',
      title: { label: '添加删除线样式', tip: '添加删除线样式' },
      propType: 'bool',
      defaultValue: false,
      setter: ["VariableSetter", "BoolSetter"]
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: ["VariableSetter", "BoolSetter"]
    },

    {
      name: 'mark',
      title: { label: '添加标记样式', tip: '添加标记样式' },
      propType: 'bool',
      defaultValue: false,
      setter: ["VariableSetter", "BoolSetter"]
    },

    {
      name: 'underline',
      title: { label: '添加下划线样式', tip: '添加下划线样式' },
      propType: 'bool',
      defaultValue: false,
      setter: ["VariableSetter", "BoolSetter"]
    },

    {
      name: 'type',
      title: { label: '文本类型', tip: '文本类型' },
      propType: { type: 'oneOf', value: ["default", 'secondary', "success", 'warning', 'danger'] },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '默认',
              value: 'default',
            },
            {
              title: '弱提示',
              value: 'secondary',
            },
            {
              title: '成功',
              value: 'success',
            },
            {
              title: '警告',
              value: 'warning',
            },
            {
              title: '错误',
              value: 'danger',
            },
          ],
        },
      },
    },],
  seniorProps: [

    {
      title: '高级',
      type: 'group',
      display: 'accordion',
      items: [
        {
          name: 'copyable',
          title: { label: '是否可拷贝', tip: '是否可拷贝' },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
        {
          name: 'editable',
          title: { label: '是否可编辑', tip: '是否可编辑' },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
        {
          name: 'ellipsis',
          title: {
            label: '自动溢出省略',
            tip: '设置自动溢出省略，需要设置元素宽度',
          },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: [
            {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
            {
              componentName: 'JsonSetter',
              isRequired: false,
            },
          ],
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'copyable.onCopy',
          template: "onCopy(${extParams}){\n// 拷贝成功的回调函数\nconsole.log('onCopy');}",
        },
        {
          name: 'editable.onStart',
          template: "onStart(${extParams}){\n// 进入编辑中状态时触发\nconsole.log('onStart');}",
        },
        {
          name: 'editable.onChange',
          template:
            "onChange(event,${extParams}){\n// 文本域编辑时触发\nconsole.log('onChange', event);}",
        },
        {
          name: 'editable.onEnd',
          template: "onEnd(${extParams}){\n// 按 ENTER 结束编辑状态时触发\nconsole.log('onEnd');}",
        },
        {
          name: 'editable.onCancel',
          template:
            "onCancel(${extParams}){\n// 按 ESC 退出编辑状态时触发\nconsole.log('onCancel');}",
        },
        {
          name: 'ellipsis.onEllipsis',
          template:
            "onEllipsis(ellipsis,${extParams}){\n// 触发省略时的回调\nconsole.log('onEllipsis', ellipsis);}",
        },
        {
          name: 'ellipsis.onExpand',
          template:
            "onExpand(event,${extParams}){\n// 点击展开时的回调\nconsole.log('onExpand', event);}",
        },
      ],
    },
  },
}
