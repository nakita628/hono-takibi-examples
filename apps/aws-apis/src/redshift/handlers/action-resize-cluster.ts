import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionResizeClusterRoute, postActionResizeClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionResizeClusterHandler = app
  .openapi(getActionResizeClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResizeClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
