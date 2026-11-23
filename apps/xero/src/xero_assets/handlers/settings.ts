import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app.openapi(getSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
