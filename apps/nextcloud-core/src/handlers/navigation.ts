import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpCoreNavigationAppsRoute,
  getOcsV2PhpCoreNavigationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const navigationHandler = app
  .openapi(getOcsV2PhpCoreNavigationAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCoreNavigationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
