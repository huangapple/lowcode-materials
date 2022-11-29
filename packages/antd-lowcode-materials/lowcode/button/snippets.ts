import {Snippet} from "@alilc/lowcode-types/lib/metadata";
export default [
  {
    title: '按钮',
    screenshot: require('./__screenshots__/button-1.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'primary',
        children: '主按钮',
      },
    },
  }
] as Snippet;
