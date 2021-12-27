type CodeTheme = "atomOneDark" | "atomOneLight" | "github";
type Page = "all" | "post" | "index";
type Agent = "desktop" | "pad" | "phone";

interface ThemeOptions {
  name: string;
  color: string;
  avatar: string;
  banner: string;
}
/**
 * 主题基本配置
 */
export declare const useThemeOptions: (
  options: Partial<ThemeOptions>
) => ThemeOptions;

interface BackgroundOptions {
  enable: boolean;
  value: string;
  opacity: number;
  repeat: boolean;
}
/**
 * 背景配置
 */
export declare const useBackgroundOptions: (
  options: Partial<BackgroundOptions>
) => BackgroundOptions;

interface BarragesOptions {
  enable: boolean;
  opacity: number;
  fontSize: string;
  colors: Array<string>;
  barrages: Array<string>;
  indexBarrages: Array<string>;
  postPageBarrages: Array<string>;
}
/**
 * 弹幕配置
 */
export declare const useBarragesOptions: (
  options: Partial<BarragesOptions>
) => BarragesOptions;

interface CatalogOptions {
  enable: boolean;
  position: "left" | "right";
}
/**
 * 博文目录配置
 */
export declare const useCatalogOptions: (
  options: Partial<CatalogOptions>
) => CatalogOptions;

interface ChartsOptions {
  enable: boolean;
  labels: Array<string>;
  datasets: Array<Object>;
}
/**
 * 图表配置
 */
export declare const useChartsOptions: (
  options: Partial<ChartsOptions>
) => ChartsOptions;

interface ClickEffectsOptions {
  enable: boolean;
  colors: Array<string>;
  size: number;
  maxCount: number;
}
/**
 * 点击特效配置
 */
export declare const useClickEffectsOptions: (
  options: Partial<ClickEffectsOptions>
) => ClickEffectsOptions;

interface CodeCopyOptions {
  enable: boolean;
}
/**
 * 代码块复制配置
 */
export declare const useCodeCopyOptions: (
  options: Partial<CodeCopyOptions>
) => CodeCopyOptions;

interface CodeHighlightOptions {
  dark: CodeTheme;
  light: CodeTheme;
}
/**
 * 代码块高亮主题配置
 */
export declare const useCodeHighlightOptions: (
  options: Partial<CodeHighlightOptions>
) => CodeHighlightOptions;

interface CodeLangOptions {
  enable: boolean;
}
/**
 * 代码块语言配置
 */
export declare const useCodeLangOptions: (
  options: Partial<CodeLangOptions>
) => CodeLangOptions;

interface CodeLinenumbersOptions {
  enable: boolean;
}
/**
 * 代码块行号配置
 */
export declare const useCodeLinenumbersOptions: (
  options: Partial<CodeLinenumbersOptions>
) => CodeLinenumbersOptions;

interface DonationOptions {
  enable: boolean;
  qrcodes: Array<string>;
}
/**
 * 捐赠配置
 */
export declare const useDonationOptions: (
  options: Partial<DonationOptions>
) => DonationOptions;

interface EmojiOptions {
  enable: boolean;
  buttonIcon: string;
  emojiList: Array<string>;
}
/**
 * 表情输入配置
 */
export declare const useEmojiOptions: (
  options: Partial<EmojiOptions>
) => EmojiOptions;

interface LinksOptions {
  enable: boolean;
  links: Array<string>;
}
/**
 * 自定义链接配置
 */
export declare const useLinksOptions: (
  options: Partial<LinksOptions>
) => LinksOptions;

interface ImagePreviewOptions {
  enable: boolean;
}
/**
 * 图片查看配置
 */
export declare const useImagePreviewOptions: (
  options: Partial<ImagePreviewOptions>
) => ImagePreviewOptions;

interface Live2dOptions {
  enable: boolean;
}
/**
 * live2d 配置
 */
export declare const useLive2dOptions: (
  options: Partial<Live2dOptions>
) => Live2dOptions;

interface LockScreenOptions {
  enable: boolean;
  background: string;
  strings: Array<string>;
}
/**
 * 主题锁屏配置
 */
export declare const useLockScreenOptions: (
  options: Partial<LockScreenOptions>
) => LockScreenOptions;

interface DarkModeOptions {
  enable: boolean;
  darkDefault: boolean;
  autoDark: boolean;
  autoLight: boolean;
}
/**
 * 深色模式配置
 */
export declare const useDarkModeOptions: (
  options: Partial<DarkModeOptions>
) => DarkModeOptions;

interface MusicPlayerOptions {
  enable: boolean;
  page: Page;
  agent: Agent;
  autoplay: boolean;
  volume: number;
  lrc: {
    enable: boolean; // 启用歌词
    type: 1 | 3; // 1 -> 字符串歌词 3 -> url 歌词
    color: string; // 颜色
  };
  audio: Array<{
    name: string;
    artist: string;
    url: string;
    cover: string;
    lrc: string;
  }>;
}
/**
 * 音乐播放器配置
 */
export declare const useMusicPlayerOptions: (
  options: Partial<MusicPlayerOptions>
) => MusicPlayerOptions;

interface NotationOptions {
  enable: boolean;
}
/**
 * 笔注配置
 */
export declare const useNotationOptions: (
  options: Partial<NotationOptions>
) => NotationOptions;

interface NoticeOptions {
  enable: boolean;
}
/**
 * 公告配置
 */
export declare const useNoticeOptions: (
  options: Partial<NoticeOptions>
) => NoticeOptions;

interface PostBottomImageOptions {
  enable: boolean;
  img: string;
  height: string;
}
/**
 * 博文底部图片配置
 */
export declare const usePostBottomImageOptions: (
  options: Partial<PostBottomImageOptions>
) => PostBottomImageOptions;

interface LicenseOptions {
  enable: boolean;
  license: boolean;
  licenseName: string;
  licenseLink: string;
  contents: Array<string>;
}
/**
 * 版权配置
 */
export declare const useLicenseOptions: (
  options: Partial<LicenseOptions>
) => LicenseOptions;

interface PostTopImageOptions {
  enable: boolean;
  license: boolean;
  licenseName: string;
  licenseLink: string;
  contents: Array<string>;
}
/**
 * 博文顶部图片配置
 */
export declare const usePostTopImageOptions: (
  options: Partial<PostTopImageOptions>
) => PostTopImageOptions;

interface QrcodeOptions {
  enable: boolean;
  img: string;
  desc: string;
}
/**
 * 二维码配置
 */
export declare const useQrcodeOptions: (
  options: Partial<QrcodeOptions>
) => QrcodeOptions;

interface SignatureOptions {
  enable: boolean;
  img: string;
  desc: string;
}
/**
 * 个性签名配置
 */
export declare const useSignatureOptions: (
  options: Partial<SignatureOptions>
) => SignatureOptions;

interface ToolsOptions {
  initialOpen: boolean;
  mobileAutoClose: boolean;
}
/**
 * 工具栏配置
 */
export declare const useToolsOptions: (
  options: Partial<ToolsOptions>
) => ToolsOptions;

interface GithubOptions {
  enable: boolean;
  color: string;
  url: string;
}
/**
 * Github 配置
 */
export declare const useGithubOptions: (
  options: Partial<GithubOptions>
) => GithubOptions;

interface GiteeOptions {
  enable: boolean;
  color: string;
  url: string;
}
/**
 * Gitee 配置
 */
export declare const useGiteeOptions: (
  options: Partial<GiteeOptions>
) => GiteeOptions;
interface PostListImageOptions {
  enable: boolean;
  images: Array<string>;
}
/**
 * 博文列表图片配置
 */
export declare const usePostListImageOptions: (
  options: Partial<PostListImageOptions>
) => PostListImageOptions;
interface WebsiteTagOptions {
  enable: boolean;
  title: string;
  favicon: string;
}
/**
 * 站点标签配置
 */
export declare const useWebsiteTagOptions: (
  options: Partial<WebsiteTagOptions>
) => WebsiteTagOptions;
