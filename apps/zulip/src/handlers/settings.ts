import { OpenAPIHono } from '@hono/zod-openapi'
import { patchSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app.openapi(patchSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
