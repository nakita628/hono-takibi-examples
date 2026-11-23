import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionBacktrackDBClusterRoute, postActionBacktrackDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionBacktrackDbClusterHandler = app
  .openapi(getActionBacktrackDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBacktrackDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
