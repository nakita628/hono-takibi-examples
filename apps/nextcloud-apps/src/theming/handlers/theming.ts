import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAppsThemingImageKeyRoute,
  getIndexPhpAppsThemingManifestAppRoute,
  getIndexPhpAppsThemingThemeThemeIdCssRoute,
} from '../routes'

const app = new OpenAPIHono()

export const themingHandler = app
  .openapi(getIndexPhpAppsThemingThemeThemeIdCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingImageKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingManifestAppRoute, (c) => {
    throw new Error('Not implemented')
  })
