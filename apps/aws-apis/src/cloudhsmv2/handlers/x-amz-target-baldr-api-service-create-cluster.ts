import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceCreateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceCreateClusterHandler = app.openapi(
  postXAmzTargetBaldrApiServiceCreateClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
