export type Theme = {
  name?: string
  color?: string
  title?: string
  avatar?: string
  favicon?: string
  headerBackground?: string
  log?: boolean
}

export type Links = Array<{ name?: string; link?: string }>

export type Github = {
  enable?: boolean
  color?: string
  url?: string
}

export type Gitee = {
  enable?: boolean
  color?: string
  url?: string
}

export type IndexListImg = {
  enable?: boolean
  imgs?: Array<string>
}
