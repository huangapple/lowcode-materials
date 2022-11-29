import {ComponentMetadata} from "@alilc/lowcode-types";
import snippets from './snippets';
import {AntdIconSetter} from '../_setters';


export default {
  snippets,
  componentName: 'Icon',
  title: '图标',
  category: '通用',
  props: [
    {
      name: 'type',
      description: '图标',
      propType: 'string',
      setter: AntdIconSetter,
    },
    {
      name: 'size',
      description: '大小',
      propType: 'number',
      defaultValue: 20,
    },
    {
      name: 'color',
      description: '颜色',
      propType: 'string',
      setter: 'ColorSetter',
    },
    {
      name: 'rotate',
      title: {
        label: '旋转角度',
        tip: '图标旋转角度',
      },
      propType: 'number',
      defaultValue: 0,
    },
    {
      name: 'spin',
      title: {label: '旋转动画', tip: '是否有旋转动画'},
      propType: 'bool',
      defaultValue: false,
    }
  ],
  configure: {
    supports: {
      style: true,
      className: true,
      events: [{name: "onClick", propType: "func", description: "点击回调"}]
    }
  },
} as ComponentMetadata | any;
