import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceInitializeClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetBaldrApiServiceInitializeClusterHandler = app.openapi(
  postXAmzTargetBaldrApiServiceInitializeClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
