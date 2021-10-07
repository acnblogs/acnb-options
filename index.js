import { defineOptions } from '@acnb/core'

export const themeConfig = defineOptions('theme', {
  name: 'reacg',
  color: '#FFB3CC',
  avatar: '',
  title: '',
  favicon: '',
  headerBackground: '',
  log: false,
})

export const backgroundConfig = defineOptions('bodyBackground', {
  enable: false,
  value: '',
  opacity: 0.85,
  repeat: false,
})

export const barrageConfig = defineOptions({
  enable: false,
  opacity: 0.6,
  fontSize: '20px',
  colors: [
    '#FE0302',
    '#FF7204',
    '#FFAA02',
    '#FFD302',
    '#FFFF00',
    '#A0EE00',
    '#00CD00',
    '#019899',
    '#4266BE',
    '#89D5FF',
    '#CC0273',
    '#CC0273',
  ],
  barrages: [],
  indexBarrages: [],
  postPageBarrages: [],
})

export const catalogConfig = defineOptions('catalog', {
  enable: true,
  position: 'left',
})

export const chartConfig = defineOptions('chart', {
  enable: false,
  labels: ['Vue', 'React', 'Flutter', 'Java', 'NodeJs', 'TypeScript', 'CSS'],
  datasets: [
    {
      label: 'My First Chart',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
    },
  ],
})

export const clickConfig = defineOptions('clickEffects', {
  enable: false,
  colors: [],
  size: 30,
  maxCount: 10,
})

export const codeCopyConfig = defineOptions('codeCopy', {
  enable: true,
})

export const codeHighlightConfig = defineOptions('codeHighlight', {
  dark: 'atomOneDark',
  light: 'atomOneLight',
})

export const codeLangConfig = defineOptions('codeLang', {
  enable: false,
})

export const codeLinenumbersConfig = defineOptions('codeLinenumbers', {
  enable: true,
})

export const donationConfig = defineOptions('donationConfig', {
  enable: false,
  qrcodes: [],
})

export const emojiConfig = defineOptions('emoji', {
  enable: true,
  buttonIcon: '🍺',
  emojiList,
})

export const linksConfig = defineOptions('links', {
  enable: true,
})
export const imagePreviewConfig = defineOptions('imagePreview', {
  enable: true,
})
export const live2dConfig = defineOptions('live2d', {
  enable: false,
  page: 'all',
  agent: 'pc',
  model: 'haru-01',
  width: 150,
  height: 200,
  position: 'left',
  gap: 'default',
})
export const lockConfig = defineOptions('lock', {
  enable: false,
  background: '',
  strings: [],
})
export const darkModeConfig = defineOptions('mode', {
  enable: true,
  darkDefault: false,
  autoDark: false,
  autoLight: false,
})
export const musicPlayerConfig = defineOptions('musicPlayer', {
  enable: true,
  page: 'all',
  agent: 'pc',
  autoplay: false,
  volume: 0.4,
  lrc: {
    enable: false, // 启用歌词
    type: 1, // 1 -> 字符串歌词 3 -> url 歌词
    color: '', // 颜色
  },
  audio: [
    {
      name: '404 not found',
      artist: 'REOL',
      url: 'https://guangzan.gitee.io/imagehost/awescnb/music/demo4.mp3',
      cover: 'https://guangzan.gitee.io/imagehost/awescnb/music/demo.jpg',
      lrc: ``,
    },
  ],
})
export const notationConfig = defineOptions('mode', {
  enable: true,
})

export const noticeConfig = defineOptions('notice', {
  enable: false,
  text: [],
})
export const postBottomImageConfig = defineOptions('postBottomImage', {
  enable: false,
  img: '',
  height: '',
})
export const postSignatureConfig = defineOptions('postSignature', {
  enable: true,
  enableLicense: true,
  content: [],
  licenseName: '',
  licenseLink: '',
})
export const postTopimageConfig = defineOptions('postTopImage', {
  enable: false,
  fixed: false,
  imgs: [],
})
export const qrcodeConfig = defineOptions('qrcodeConfig', {
  enable: false,
  img: '',
  desc: '',
})
export const signatureConfig = defineOptions('signature', {
  enable: false,
  contents: [],
})
export const toolsConfig = defineOptions('tools', {
  initialOpen: true,
  mobileAutoClose: true,
})
