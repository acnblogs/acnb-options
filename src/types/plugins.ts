import { type } from 'os'

export type Background = {
  enable?: boolean
  value?: string
  opacity?: number
  repeat?: boolean
}

export type Barrage = {
  enable?: boolean
  opacity?: number
  fontSize?: string
  colors?: Array<string>
  barrages?: Array<string>
  indexBarrages?: Array<string>
  postPageBarrages?: Array<string>
}

export type Catalog = {
  enable?: boolean
  position?: string
}

export type Chart = {
  enable?: boolean
  position?: string
  labels?: Array<string>
  datasets?: Array<{
    label?: string
    data?: Array<number>
    fill?: true
    backgroundColor?: string
    borderColor?: string
    pointBackgroundColor?: string
    pointBorderColor?: string
    pointHoverBackgroundColor?: string
    pointHoverBorderColor?: string
  }>
}

export type Click = {
  enable: boolean
  colors: Array<string>
  size: number
  maxCount: number
}

export type Donation = {
  enable: boolean
  qrcodes: Array<string>
}

export type Tools = {
  enable: boolean
  initialOpen: boolean
  mobileAutoClose: boolean
}

export type Emoji = {
  enable: boolean
  buttonIcon: string
  emojiList: Array<{
    value: string
    label: string
  }>
}

export type Highlight = {
  dark: string
  light: string
}

export type Imagebox = {
  enable: boolean
}

export type Linenumbers = {
  enable: boolean
}

export type Live2d = {
  enable: boolean
  page: 'all' | string
  agent: 'pc' | 'phone'
  model: 'haru-01' | string
  width: number
  height: number
  position: 'left' | 'right'
  gap: 'default' | number
}

export type Lock = {
  enable: boolean
  background: string
  strings: Array<string>
}

export type DarkMode = {
  enable: boolean
  darkDefault: boolean
  autoDark: boolean
  autoLight: boolean
}

export type Notice = {
  enable: boolean
  text: Array<string>
}

export type MusicPlayer = {
  enable: boolean
  page: 'all' | string
  agent: 'pc' | 'phone'
  autoplay: boolean
  volume: number
  lrc: {
    enable: boolean // 启用歌词
    type: number // 1 -> 字符串歌词 3 -> url 歌词
    color: string // 颜色
  }
  audio: Array<{
    name: string
    artist: string
    url: string
    cover: string
    lrc: string
  }>
}

export type PostBottomimage = {
  enable: boolean
}

export type PostSignature = {
  enable: boolean
}

export type PostTopimage = {
  enable: boolean
}

export type TopProgress = {
  enable: boolean
}

export type Qrcode = {
  enable: boolean
}

export type Signature = {
  enable: boolean
}

export type Notation = {
  enable: boolean
}
