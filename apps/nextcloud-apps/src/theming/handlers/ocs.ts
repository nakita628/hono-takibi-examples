import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRoute,
  putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(putOcsV2PhpAppsThemingApiV1ThemeThemeIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsThemingApiV1ThemeThemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
