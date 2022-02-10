const t = Object.assign;
const c = window.opts || {}, i = (n, e) => (o) => ((n2, e2, o2) => {
  const c2 = t({}, n2, o2);
  return t({}, c2, e2);
})(e, c[n], o);
const useThemeOptions = i("theme", {
  name: "reacg",
  color: "#FFB3CC",
  avatar: "",
  headerBackground: ""
});
const useBackgroundOptions = i("bodyBackground", {
  enable: false,
  value: "",
  opacity: 0.85,
  repeat: false
});
const useBarragesOptions = i("barrages", {
  enable: false,
  opacity: 0.6,
  fontSize: "20px",
  colors: [],
  barrages: [],
  indexBarrages: [],
  postPageBarrages: []
});
const useCatalogOptions = i("catalog", {
  enable: false,
  position: "left"
});
const useChartsOptions = i("chart", {
  enable: false,
  labels: ["Vue", "React", "Flutter", "Java", "NodeJs", "TypeScript", "CSS"],
  datasets: [
    {
      label: "My First Chart",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)"
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)"
    }
  ]
});
const useClickEffectsOptions = i("clickEffects", {
  enable: false,
  colors: [],
  size: 30,
  maxCount: 10
});
const useCodeCopyOptions = i("codeCopy", {
  enable: false
});
const useCodeHighlightOptions = i("codeHighlight", {
  dark: "atomOneDark",
  light: "atomOneLight"
});
const useCodeLangOptions = i("codeLang", {
  enable: false
});
const useCodeLinenumbersOptions = i("codeLinenumbers", {
  enable: false
});
const useDonationOptions = i("donation", {
  enable: false,
  qrcodes: []
});
const useEmojiOptions = i("emoji", {
  enable: false,
  buttonIcon: "",
  emojiList: []
});
const useLinksOptions = i("links", {
  enable: false,
  links: []
});
const useImagePreviewOptions = i("imagePreview", {
  enable: false
});
const useLive2dOptions = i("live2d", {
  enable: false,
  page: "all",
  agent: "pc",
  model: "haru-01",
  width: 150,
  height: 200,
  position: "left",
  gap: "default"
});
const useLockScreenOptions = i("lock", {
  enable: false,
  background: "",
  strings: []
});
const useDarkModeOptions = i("mode", {
  enable: false,
  darkDefault: false,
  autoDark: false,
  autoLight: false
});
const useMusicPlayerOptions = i("musicPlayer", {
  enable: false,
  page: "all",
  agent: "pc",
  autoplay: false,
  volume: 0.4,
  lrc: {
    enable: false,
    type: 1,
    color: ""
  },
  audio: [
    {
      name: "404 not found",
      artist: "REOL",
      url: "https://guangzan.gitee.io/imagehost/awescnb/music/demo4.mp3",
      cover: "https://guangzan.gitee.io/imagehost/awescnb/music/demo.jpg",
      lrc: ``
    }
  ]
});
const useNotationOptions = i("mode", {
  enable: false
});
const useNoticeOptions = i("notice", {
  enable: false,
  contents: []
});
const usePostBottomImageOptions = i("postBottomImage", {
  enable: false,
  img: "",
  height: ""
});
const useLicenseOptions = i("license", {
  enable: false,
  license: true,
  licenseName: "",
  licenseLink: "",
  contents: []
});
const usePostTopImageOptions = i("postTopImage", {
  enable: false,
  fixed: false,
  imgs: []
});
const useQrcodeOptions = i("qrcode", {
  enable: false,
  img: "",
  desc: ""
});
const useSignatureOptions = i("signature", {
  enable: false,
  contents: []
});
const useToolsOptions = i("tools", {
  initialOpen: true,
  mobileAutoClose: true
});
const useGithubOptions = i("github", {
  enable: false,
  color: "#ffb3cc",
  url: ""
});
const useGiteeOptions = i("gitee", {
  enable: false,
  color: "#ffb3cc",
  url: ""
});
const usePostListImageOptions = i("postListImage", {
  enable: false,
  images: []
});
const useWebsiteTagOptions = i("webTag", {
  enable: false,
  title: "",
  favicon: ""
});
const useLockOptions = i("webTag", {
  enable: false,
  background: "",
  strings: []
});
export { useBackgroundOptions, useBarragesOptions, useCatalogOptions, useChartsOptions, useClickEffectsOptions, useCodeCopyOptions, useCodeHighlightOptions, useCodeLangOptions, useCodeLinenumbersOptions, useDarkModeOptions, useDonationOptions, useEmojiOptions, useGiteeOptions, useGithubOptions, useImagePreviewOptions, useLicenseOptions, useLinksOptions, useLive2dOptions, useLockOptions, useLockScreenOptions, useMusicPlayerOptions, useNotationOptions, useNoticeOptions, usePostBottomImageOptions, usePostListImageOptions, usePostTopImageOptions, useQrcodeOptions, useSignatureOptions, useThemeOptions, useToolsOptions, useWebsiteTagOptions };
