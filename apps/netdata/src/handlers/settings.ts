import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3SettingsRoute, putApiV3SettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getApiV3SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
