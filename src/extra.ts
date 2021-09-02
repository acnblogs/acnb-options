/**
 * 插件以外的配置
 */
import { mergeOptions } from './helper'
import { userConfig } from './constants/base'
import { Theme, Links, Github, Gitee, IndexListImg } from './types/index'

/**
 * 皮肤基本配置
 * @param {*} devOptions
 */
export function getThemeOptions(devOptions: Theme): Theme {
  const defaultOptions: Theme = {
    name: 'reacg',
    color: '#FFB3CC',
    title: '',
    avatar: '',
    favicon: '',
    headerBackground: '',
    log: true,
  }
  return mergeOptions(defaultOptions, userConfig.theme, devOptions) as Theme
}

/**
 * 自定义链接
 * @param {*} devOptions
 */
export function getLinksOptions(devOptions: Links): Links {
  const defaultOptions: Links = [
    {
      name: '自定义链接',
      link: '',
    },
  ]
  return userConfig.links || devOptions || defaultOptions
}

/**
 * GitHub 配置
 * @param {*} devOptions
 */
export function getGithubOptions(devOptions: Github): Github {
  const defaultOptions: Github = {
    enable: true,
    color: '#ffb3cc',
    url: '',
  }
  return mergeOptions(defaultOptions, userConfig.github, devOptions) as Github
}

/**
 * Gitee 配置
 * @param {*} devOptions
 */
export function getGiteeOptions(devOptions: Gitee): Gitee {
  const defaultOptions: Gitee = {
    enable: true,
    color: '#C71D23',
    url: '',
  }
  return mergeOptions(defaultOptions, userConfig.gitee, devOptions) as Gitee
}

/**
 * 首页图片列表配置
 * @param {*} devOptions
 */
export function getIndexListImgOptions(devOptions: IndexListImg) {
  const defaultOptions: IndexListImg = {
    enable: false,
    imgs: [],
  }
  return mergeOptions(
    defaultOptions,
    userConfig.indexListImg,
    devOptions
  ) as IndexListImg
}
