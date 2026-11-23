import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsRoute, postSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
