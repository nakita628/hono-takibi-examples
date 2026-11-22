import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexPhpAppsThemingBackgroundCustomRoute,
  deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRoute,
  getIndexPhpAppsThemingBackgroundRoute,
  postIndexPhpAppsThemingBackgroundTypeRoute,
  putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userThemeHandler = app
  .openapi(getIndexPhpAppsThemingBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpAppsThemingBackgroundTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexPhpAppsThemingBackgroundCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
