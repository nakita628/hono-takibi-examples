import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionResizeClusterRoute, postActionResizeClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionResizeClusterHandler = app
  .openapi(getActionResizeClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResizeClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
