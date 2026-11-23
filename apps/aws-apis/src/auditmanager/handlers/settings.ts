import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsAttributeRoute, putSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
