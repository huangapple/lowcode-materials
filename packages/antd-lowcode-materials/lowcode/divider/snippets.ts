import { Snippet } from "@alilc/lowcode-types/lib/metadata";

export default [

  {
    title: '分割线(可带文字)',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/divider-2.png',
    schema: {
      componentName: 'Divider',
      props: {
        children: [
          {
            componentName: 'Typography.Text',
            props: {
              children: '分割文字',
            },
          },
        ],
      },
    },
  },
] as Snippet;
