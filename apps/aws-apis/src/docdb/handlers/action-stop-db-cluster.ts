import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStopDBClusterRoute, postActionStopDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionStopDbClusterHandler = app
  .openapi(getActionStopDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStopDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
