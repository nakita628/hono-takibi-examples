import { OpenAPIHono } from '@hono/zod-openapi'
import { getPluginCsiPluginIDRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginHandler = app.openapi(getPluginCsiPluginIDRoute, (c) => {
  throw new Error('Not implemented')
})
