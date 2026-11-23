import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app.openapi(getSettingsIdRoute, (c) => {
  throw new Error('Not implemented')
})
