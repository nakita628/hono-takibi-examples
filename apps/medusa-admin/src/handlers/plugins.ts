import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminPluginsRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app.openapi(getAdminPluginsRoute, (c) => {
  throw new Error('Not implemented')
})
