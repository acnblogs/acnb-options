import { defineOptions } from '@acnb/core'

export const useThemeConfig = defineOptions('theme', {
  name: 'reacg',
  color: '#FFB3CC',
  avatar: '',
  title: '',
  favicon: '',
  banner: '',
})

export const useBackgroundConfig = defineOptions('bodyBackground', {
  enable: false,
  value: '',
  opacity: 0.85,
  repeat: false,
})

export const useBarragesConfig = defineOptions({
  enable: false,
  opacity: 0.6,
  fontSize: '20px',
  colors: [],
  barrages: [],
  indexBarrages: [],
  postPageBarrages: [],
})

export const useCatalogConfig = defineOptions('catalog', {
  enable: true,
  position: 'left',
})

export const useChartsConfig = defineOptions('chart', {
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

export const useClickEffectsConfig = defineOptions('clickEffects', {
  enable: false,
  colors: [],
  size: 30,
  maxCount: 10,
})

export const useCodeCopyConfig = defineOptions('codeCopy', {
  enable: true,
})

export const useCodeHighlightConfig = defineOptions('codeHighlight', {
  dark: 'atomOneDark',
  light: 'atomOneLight',
})

export const useCodeLangConfig = defineOptions('codeLang', {
  enable: false,
})

export const useCodeLinenumbersConfig = defineOptions('codeLinenumbers', {
  enable: true,
})

export const useDonationConfig = defineOptions('donationConfig', {
  enable: false,
  qrcodes: [],
})

export const useEmojiConfig = defineOptions('emoji', {
  enable: true,
  buttonIcon: '',
  emojiList: [],
})

export const useLinksConfig = defineOptions('links', {
  enable: true,
  links: [],
})

export const useImagePreviewConfig = defineOptions('imagePreview', {
  enable: true,
})

export const useLive2dConfig = defineOptions('live2d', {
  enable: false,
  page: 'all',
  agent: 'pc',
  model: 'haru-01',
  width: 150,
  height: 200,
  position: 'left',
  gap: 'default',
})

export const useLockConfig = defineOptions('lock', {
  enable: false,
  background: '',
  strings: [],
})

export const useDarkModeConfig = defineOptions('mode', {
  enable: true,
  darkDefault: false,
  autoDark: false,
  autoLight: false,
})

export const useMusicPlayerConfig = defineOptions('musicPlayer', {
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

export const useNotationConfig = defineOptions('mode', {
  enable: true,
})

export const useNoticeConfig = defineOptions('notice', {
  enable: false,
  text: [],
})

export const usePostBottomImageConfig = defineOptions('postBottomImage', {
  enable: false,
  img: '',
  height: '',
})

export const useLicenseConfig = defineOptions('license', {
  enable: true,
  license: true,
  licenseName: '',
  licenseLink: '',
  contents: [],
})

export const usePostTopimageConfig = defineOptions('postTopImage', {
  enable: false,
  fixed: false,
  imgs: [],
})

export const useQrcodeConfig = defineOptions('qrcodeConfig', {
  enable: false,
  img: '',
  desc: '',
})

export const useSignatureConfig = defineOptions('signature', {
  enable: false,
  contents: [],
})

export const useToolsConfig = defineOptions('tools', {
  initialOpen: true,
  mobileAutoClose: true,
})

export const useGithubConfig = defineOptions('github', {
  enable: true,
  color: '#ffb3cc',
  url: '',
})

export const useGiteeConfig = defineOptions('gitee', {
  enable: true,
  color: '#ffb3cc',
  url: '',
})

export const usePostListImageConfig = defineOptions('postListImage', {
  enable: true,
  images: [],
})
