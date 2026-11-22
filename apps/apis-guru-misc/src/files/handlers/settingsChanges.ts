import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsChangesRoute } from '../routes'

const app = new OpenAPIHono()

export const settingsChangesHandler = app.openapi(getSettingsChangesRoute, (c) => {
  throw new Error('Not implemented')
})
