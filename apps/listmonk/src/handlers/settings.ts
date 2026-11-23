import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsRoute, postSettingsSmtpTestRoute, putSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsSmtpTestRoute, (c) => {
    throw new Error('Not implemented')
  })
