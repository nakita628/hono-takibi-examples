import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountSettingsRoute, putAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountSettingsHandler = app
  .openapi(getAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
