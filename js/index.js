const list = [
  {
    name: '华晓龙',
    range: 1,
  },
  {
    name: '欧阳振强',
    range: 1,
  },
  {
    name: '董朋辉',
    range: 1,
  },
  {
    name: '洪磊',
    range: 1,
  },
//   {
//     name: '侯家麒',
//     range: 1,
//   },
  {
    name: '黄佳豪',
    range: 1,
  },
  {
    name: '黄山',
    range: 1,
  },
  {
    name: '林泽毅',
    range: 1,
  },
//   {
//     name: '田佳亮',
//     range: 1,
//   },
  {
    name: '王克强',
    range: 1,
  },
  {
    name: '吴俊杰',
    range: 1,
  },
  {
    name: '徐谦',
    range: 1,
  },
//   {
//     name: '张元博',
//     range: 1,
//   },
  {
    name: '张政',
    range: 1,
  },
  {
    name: '周继源',
    range: 1
  },
];
const lens = list.length;
// 随机颜色
const randomColor = () => {
  return Math.floor(Math.random() * 256);
};

const myLucky = new LuckyCanvas.LuckyWheel('#app', {
  width: '500px',
  height: '500px',
  blocks: [{ padding: '12px', background: '#4765c4' }],
  prizes: list.map((v, i) => {
    return { fonts: [{ text: v.name, fontColor: '#FFF', top: '10%' }], background: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`, range: v.range };
  }),
  buttons: [
    { radius: '50%', background: '#617df2' },
    { radius: '45%', background: '#afc8ff' },
    {
      radius: '40%', background: '#4765c4', pointer: true,
      fonts: [{ text: '开始\n抽奖', fontSize: '32px', fontColor: '#FFF', top: '-20px' }]
    },
  ],
  defaultConfig: {
    stopRange: 0.8,
    accelerationTime: 2000,
    decelerationTime: 3000,
  },
  start: () => {
    myLucky.play()
    myLucky.stop();
  },
})
