import { OpenAPIHono } from '@hono/zod-openapi'
import { getServerSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const serverSettingsHandler = app.openapi(getServerSettingsRoute, (c) => {
  throw new Error('Not implemented')
})
