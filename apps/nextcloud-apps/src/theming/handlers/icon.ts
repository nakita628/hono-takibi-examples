import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAppsThemingFaviconAppRoute,
  getIndexPhpAppsThemingIconAppRoute,
  getIndexPhpAppsThemingImgAppImageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const iconHandler = app
  .openapi(getIndexPhpAppsThemingFaviconAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingIconAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAppsThemingImgAppImageRoute, (c) => {
    throw new Error('Not implemented')
  })
