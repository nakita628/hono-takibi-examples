import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsPublicRoute, getSettingsRoute, putSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
