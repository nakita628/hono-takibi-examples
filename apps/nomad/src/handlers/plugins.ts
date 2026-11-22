import { OpenAPIHono } from '@hono/zod-openapi'
import { getPluginCsiPluginIDRoute, getPluginsRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(getPluginCsiPluginIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
