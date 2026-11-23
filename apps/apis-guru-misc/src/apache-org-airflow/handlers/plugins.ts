import { OpenAPIHono } from '@hono/zod-openapi'
import { getPluginsRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app.openapi(getPluginsRoute, (c) => {
  throw new Error('Not implemented')
})
