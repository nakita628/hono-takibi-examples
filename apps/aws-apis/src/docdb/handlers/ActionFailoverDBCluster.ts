import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionFailoverDBClusterRoute, postActionFailoverDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionFailoverDBClusterHandler = app
  .openapi(getActionFailoverDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionFailoverDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
