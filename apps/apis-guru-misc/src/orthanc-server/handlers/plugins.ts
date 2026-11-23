import { OpenAPIHono } from '@hono/zod-openapi'
import { getPluginsExplorerJsRoute, getPluginsIdRoute, getPluginsRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(getPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsExplorerJsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
