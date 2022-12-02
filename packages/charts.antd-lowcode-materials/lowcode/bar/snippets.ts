let data = [
  {
    year: '1951 年',
    value: 38,
  },
  {
    year: '1952 年',
    value: 52,
  },
  {
    year: '1956 年',
    value: 61,
  },
  {
    year: '1957 年',
    value: 145,
  },
  {
    year: '1958 年',
    value: 48,
  },
]
export default [
  {
    title: '基础条形图',
    screenshot: 'https://gw.alipayobjects.com/zos/antfincdn/rWp4Sq5ofk/10256978-7f35-4a4c-b67c-39aaad269bc2.png',
    schema: {
      componentName: 'Bar',
      props: {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
      },
    },
  },
];
