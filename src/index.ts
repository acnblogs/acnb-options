import { defineOptions } from "@acnb/core";

export const useThemeOptions = defineOptions("theme", {
  name: "reacg",
  color: "#FFB3CC",
  avatar: "",
  headerBackground: "",
});

export const useBackgroundOptions = defineOptions("bodyBackground", {
  enable: false,
  value: "",
  opacity: 0.85,
  repeat: false,
});

export const useBarragesOptions = defineOptions("barrages", {
  enable: false,
  opacity: 0.6,
  fontSize: "20px",
  colors: [],
  barrages: [],
  indexBarrages: [],
  postPageBarrages: [],
});

export const useCatalogOptions = defineOptions("catalog", {
  enable: false,
  position: "left",
});

export const useChartsOptions = defineOptions("chart", {
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
      pointHoverBorderColor: "rgb(255, 99, 132)",
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
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
});

export const useClickEffectsOptions = defineOptions("clickEffects", {
  enable: false,
  colors: [],
  size: 30,
  maxCount: 10,
});

export const useCodeCopyOptions = defineOptions("codeCopy", {
  enable: false,
});

export const useCodeHighlightOptions = defineOptions("codeHighlight", {
  dark: "atomOneDark",
  light: "atomOneLight",
});

export const useCodeLangOptions = defineOptions("codeLang", {
  enable: false,
});

export const useCodeLinenumbersOptions = defineOptions("codeLinenumbers", {
  enable: false,
});

export const useDonationOptions = defineOptions("donation", {
  enable: false,
  qrcodes: [],
});

export const useEmojiOptions = defineOptions("emoji", {
  enable: false,
  buttonIcon: "",
  emojiList: [],
});

export const useLinksOptions = defineOptions("links", {
  enable: false,
  value: [],
});

export const useImagePreviewOptions = defineOptions("imagePreview", {
  enable: false,
});

export const useLive2dOptions = defineOptions("live2d", {
  enable: false,
  page: "all",
  agent: "pc",
  model: "haru-01",
  width: 150,
  height: 200,
  position: "left",
  gap: "default",
});

export const useLockScreenOptions = defineOptions("lock", {
  enable: false,
  background: "",
  strings: [],
});

export const useDarkModeOptions = defineOptions("mode", {
  enable: false,
  darkDefault: false,
  autoDark: false,
  autoLight: false,
});

export const useMusicPlayerOptions = defineOptions("musicPlayer", {
  enable: false,
  page: "all",
  agent: "pc",
  autoplay: false,
  volume: 0.4,
  lrc: {
    enable: false, // 启用歌词
    type: 1, // 1 -> 字符串歌词 3 -> url 歌词
    color: "", // 颜色
  },
  audio: [
    {
      name: "404 not found",
      artist: "REOL",
      url: "https://guangzan.gitee.io/imagehost/awescnb/music/demo4.mp3",
      cover: "https://guangzan.gitee.io/imagehost/awescnb/music/demo.jpg",
      lrc: ``,
    },
  ],
});

export const useNotationOptions = defineOptions("mode", {
  enable: false,
});

export const useNoticeOptions = defineOptions("notice", {
  enable: false,
  contents: [],
});

export const usePostBottomImageOptions = defineOptions("postBottomImage", {
  enable: false,
  img: "",
  height: "",
});

export const useLicenseOptions = defineOptions("license", {
  enable: false,
  license: true,
  licenseName: "",
  licenseLink: "",
  contents: [],
});

export const usePostTopImageOptions = defineOptions("postTopImage", {
  enable: false,
  fixed: false,
  imgs: [],
});

export const useQrcodeOptions = defineOptions("qrcode", {
  enable: false,
  img: "",
  desc: "",
});

export const useSignatureOptions = defineOptions("signature", {
  enable: false,
  contents: [],
});

export const useToolsOptions = defineOptions("tools", {
  initialOpen: true,
  mobileAutoClose: true,
});

export const useGithubOptions = defineOptions("github", {
  enable: false,
  color: "#ffb3cc",
  url: "",
});

export const useGiteeOptions = defineOptions("gitee", {
  enable: false,
  color: "#ffb3cc",
  url: "",
});

export const usePostListImageOptions = defineOptions("postListImage", {
  enable: false,
  images: [],
});

export const useWebsiteTagOptions = defineOptions("webTag", {
  enable: false,
  title: "",
  favicon: "",
});

export const useLockOptions = defineOptions("webTag", {
  enable: false,
  background: "",
  strings: [],
});

export const useCodeTrafficLightOptions = defineOptions("codeTrafficLight", {
  enable: false,
});
