import { OpenAPIHono } from '@hono/zod-openapi'
import { getPluginsRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginHandler = app.openapi(getPluginsRoute, (c) => {
  throw new Error('Not implemented')
})
