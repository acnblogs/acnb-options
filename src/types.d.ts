import * as Opts from './types/index'

export {}

declare global {
  interface Window {
    opts: {
      theme: Opts.Theme
      links: Opts.Theme
      github: Opts.Github
      gitee: Opts.Gitee
      indexListImg: Opts.IndexListImg
      bodyBackground: Opts.Background
      barrage: Opts.Barrage
      catalog: Opts.Catalog
      charts: Opts.Chart
      click: Opts.Click
      donation: Opts.Donation
      tools: Opts.Tools
      emoji: Opts.Emoji
      highLight: Opts.Highlight
      linenumbers: Opts.Linenumbers
      live2d: Opts.Live2d
      lock: Opts.Lock
      imagebox: Opts.Imagebox
      darkMode: Opts.DarkMode
      notice: Opts.Notice
      musicPlayer: Opts.MusicPlayer
      postBottomimage: Opts.PostBottomimage
      postSignature: Opts.PostSignature
      postTopimage: Opts.PostTopimage
      topProgress: Opts.TopProgress
      qrcode: Opts.Qrcode
      signature: Opts.Signature
      notation: Opts.Notation
    }
  }
}
