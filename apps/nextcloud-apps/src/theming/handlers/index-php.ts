import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexPhpAppsThemingBackgroundCustomRoute,
  getIndexPhpAppsThemingBackgroundRoute,
  getIndexPhpAppsThemingFaviconAppRoute,
  getIndexPhpAppsThemingIconAppRoute,
  getIndexPhpAppsThemingImageKeyRoute,
  getIndexPhpAppsThemingImgAppImageRoute,
  getIndexPhpAppsThemingManifestAppRoute,
  getIndexPhpAppsThemingThemeThemeIdCssRoute,
  postIndexPhpAppsThemingBackgroundTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app
  .openapi(getIndexPhpAppsThemingThemeThemeIdCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingImageKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingManifestAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingFaviconAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingIconAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingImgAppImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpAppsThemingBackgroundTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexPhpAppsThemingBackgroundCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
