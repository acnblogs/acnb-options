type CodeTheme = "atomOneDark" | "atomOneLight" | "github";
type Page = "all" | "post" | "index";
type Agent = "desktop" | "pad" | "phone";
type Audio = Array<{
  name: string;
  artist: string;
  url: string;
  cover: string; // 封面
  lrc: string;
}>;
type Lrc = {
  enable: boolean; // 启用歌词
  type: 1 | 3; // 1 -> 字符串歌词 3 -> url 歌词
  color: string; // 颜色
};
type Link = {
  name: string;
  link: string;
};
interface ThemeOptions {
  name: string;
  color: string;
  avatar: string;
  headerBackground: string;
}
interface BackgroundOptions {
  enable: boolean;
  value: string;
  opacity: number;
  repeat: boolean;
}
interface BarragesOptions {
  enable: boolean;
  opacity: number;
  fontSize: string;
  colors: Array<string>;
  barrages: Array<string>;
  indexBarrages: Array<string>;
  postPageBarrages: Array<string>;
}
interface CatalogOptions {
  enable: boolean;
  position: "left" | "right";
}
interface ChartsOptions {
  enable: boolean;
  labels: Array<string>;
  datasets: Array<Object>;
}
interface ClickEffectsOptions {
  enable: boolean;
  colors: Array<string>;
  size: number;
  maxCount: number;
}
interface CodeCopyOptions {
  enable: boolean;
}
interface CodeHighlightOptions {
  dark: CodeTheme;
  light: CodeTheme;
}
interface CodeLangOptions {
  enable: boolean;
}
interface CodeLinenumbersOptions {
  enable: boolean;
}
interface DonationOptions {
  enable: boolean;
  qrcodes: Array<string>;
}
interface EmojiOptions {
  enable: boolean;
  buttonIcon: string;
  emojiList: Array<string>;
}
interface LinksOptions {
  enable: boolean;
  links: Array<Link>;
}
interface ImagePreviewOptions {
  enable: boolean;
}
interface Live2dOptions {
  enable: boolean;
}
interface LockScreenOptions {
  enable: boolean;
  background: string;
  strings: Array<string>;
}
interface DarkModeOptions {
  enable: boolean;
  darkDefault: boolean;
  autoDark: boolean;
  autoLight: boolean;
}
interface MusicPlayerOptions {
  enable: boolean;
  page: Page;
  agent: Agent;
  autoplay: boolean;
  volume: number;
  lrc: Lrc;
  audio: Audio;
}
interface NotationOptions {
  enable: boolean;
}
interface NoticeOptions {
  enable: boolean;
}
interface PostBottomImageOptions {
  enable: boolean;
  img: string;
  height: string;
}
interface LicenseOptions {
  enable: boolean;
  license: boolean;
  licenseName: string;
  licenseLink: string;
  contents: Array<string>;
}
interface PostTopImageOptions {
  enable: boolean;
  license: boolean;
  licenseName: string;
  licenseLink: string;
  contents: Array<string>;
}
interface QrcodeOptions {
  enable: boolean;
  img: string;
  desc: string;
}
interface SignatureOptions {
  enable: boolean;
  img: string;
  desc: string;
}
interface ToolsOptions {
  initialOpen: boolean;
  mobileAutoClose: boolean;
}
interface GithubOptions {
  enable: boolean;
  color: string;
  url: string;
}
interface GiteeOptions {
  enable: boolean;
  color: string;
  url: string;
}
interface PostListImageOptions {
  enable: boolean;
  images: Array<string>;
}
interface WebsiteTagOptions {
  enable: boolean;
  title: string;
  favicon: string;
}
interface LockOptions {
  enable: boolean;
  background: string;
  strings: Array<string>;
}

/**
 * 主题基本配置
 */
export declare const useThemeOptions: (
  options: Partial<ThemeOptions>
) => ThemeOptions;
/**
 * 背景配置
 */
export declare const useBackgroundOptions: (
  options: Partial<BackgroundOptions>
) => BackgroundOptions;
/**
 * 弹幕配置
 */
export declare const useBarragesOptions: (
  options: Partial<BarragesOptions>
) => BarragesOptions;
/**
 * 博文目录配置
 */
export declare const useCatalogOptions: (
  options: Partial<CatalogOptions>
) => CatalogOptions;
/**
 * 图表配置
 */
export declare const useChartsOptions: (
  options: Partial<ChartsOptions>
) => ChartsOptions;
/**
 * 点击特效配置
 */
export declare const useClickEffectsOptions: (
  options: Partial<ClickEffectsOptions>
) => ClickEffectsOptions;
/**
 * 代码块复制配置
 */
export declare const useCodeCopyOptions: (
  options: Partial<CodeCopyOptions>
) => CodeCopyOptions;
/**
 * 代码块高亮主题配置
 */
export declare const useCodeHighlightOptions: (
  options: Partial<CodeHighlightOptions>
) => CodeHighlightOptions;
/**
 * 代码块语言配置
 */
export declare const useCodeLangOptions: (
  options: Partial<CodeLangOptions>
) => CodeLangOptions;
/**
 * 代码块行号配置
 */
export declare const useCodeLinenumbersOptions: (
  options: Partial<CodeLinenumbersOptions>
) => CodeLinenumbersOptions;
/**
 * 捐赠配置
 */
export declare const useDonationOptions: (
  options: Partial<DonationOptions>
) => DonationOptions;
/**
 * 表情输入配置
 */
export declare const useEmojiOptions: (
  options: Partial<EmojiOptions>
) => EmojiOptions;
/**
 * 自定义链接配置
 */
export declare const useLinksOptions: (
  options: Partial<LinksOptions>
) => LinksOptions;
/**
 * 图片查看配置
 */
export declare const useImagePreviewOptions: (
  options: Partial<ImagePreviewOptions>
) => ImagePreviewOptions;
/**
 * live2d 配置
 */
export declare const useLive2dOptions: (
  options: Partial<Live2dOptions>
) => Live2dOptions;
/**
 * 主题锁屏配置
 */
export declare const useLockScreenOptions: (
  options: Partial<LockScreenOptions>
) => LockScreenOptions;
/**
 * 深色模式配置
 */
export declare const useDarkModeOptions: (
  options: Partial<DarkModeOptions>
) => DarkModeOptions;
/**
 * 音乐播放器配置
 */
export declare const useMusicPlayerOptions: (
  options: Partial<MusicPlayerOptions>
) => MusicPlayerOptions;
/**
 * 笔注配置
 */
export declare const useNotationOptions: (
  options: Partial<NotationOptions>
) => NotationOptions;
/**
 * 公告配置
 */
export declare const useNoticeOptions: (
  options: Partial<NoticeOptions>
) => NoticeOptions;
/**
 * 博文底部图片配置
 */
export declare const usePostBottomImageOptions: (
  options: Partial<PostBottomImageOptions>
) => PostBottomImageOptions;
/**
 * 版权配置
 */
export declare const useLicenseOptions: (
  options: Partial<LicenseOptions>
) => LicenseOptions;
/**
 * 博文顶部图片配置
 */
export declare const usePostTopImageOptions: (
  options: Partial<PostTopImageOptions>
) => PostTopImageOptions;
/**
 * 二维码配置
 */
export declare const useQrcodeOptions: (
  options: Partial<QrcodeOptions>
) => QrcodeOptions;
/**
 * 个性签名配置
 */
export declare const useSignatureOptions: (
  options: Partial<SignatureOptions>
) => SignatureOptions;
/**
 * 工具栏配置
 */
export declare const useToolsOptions: (
  options: Partial<ToolsOptions>
) => ToolsOptions;
/**
 * Github 配置
 */
export declare const useGithubOptions: (
  options: Partial<GithubOptions>
) => GithubOptions;
/**
 * Gitee 配置
 */
export declare const useGiteeOptions: (
  options: Partial<GiteeOptions>
) => GiteeOptions;
/**
 * 博文列表图片配置
 */
export declare const usePostListImageOptions: (
  options: Partial<PostListImageOptions>
) => PostListImageOptions;
/**
 * 站点标签配置
 */
export declare const useWebsiteTagOptions: (
  options: Partial<WebsiteTagOptions>
) => WebsiteTagOptions;
/**
 * 锁屏配置
 */
export declare const useLockOptions: (
  options: Partial<LockOptions>
) => LockOptions;
