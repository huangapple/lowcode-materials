import {Snippet} from "@alilc/lowcode-types/lib/metadata";
export default [

  {
    title: '栅格',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-3.png',
    schema: {
      componentName: 'Row',
      props: {},
      children: [
        {
          componentName: 'Col',
          props: {
            span: 6,
          },
        },
        {
          componentName: 'Col',
          props: {
            span: 18,
          },
        },
      ],
    },
  },
] as Snippet;
