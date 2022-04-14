const list = [
  '华晓龙',
  '欧阳振强',
//   '董朋辉',
  '费露军',
  '洪磊',
  '侯家麒',
  '黄佳豪',
  '黄山',
  '蒋益波',
//   '林泽毅',
//   '谭心睿',
  '田佳亮',
  '王克强',
  '吴俊杰',
//   '徐谦',
//   '张玉琪',
  '张元博',
//   '张政',
  '周继源',
];
const lens = list.length;
// 最终中奖
const answer = () => {
  return Math.floor(Math.random() * lens);
};
// 随机颜色
const randomColor = () => {
  return Math.floor(Math.random() * 256);
};

const myLucky = new LuckyCanvas.LuckyWheel('#app', {
  width: '500px',
  height: '500px',
  blocks: [{ padding: '12px', background: '#4765c4' }],
  prizes: list.map((v, i) => {
    return { fonts: [{ text: v, fontColor: '#FFF', top: '10%' }], background: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})` };
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
    myLucky.stop(answer());
  },
})
