import { OpenAPIHono } from '@hono/zod-openapi'
import { getToolsRoute, postToolsInvokeRoute, postToolsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const toolsHandler = app
  .openapi(getToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postToolsInvokeRoute, (c) => {
    throw new Error('Not implemented')
  })
