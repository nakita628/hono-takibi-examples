import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceDeleteClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetBaldrApiServiceDeleteClusterHandler = app.openapi(
  postXAmzTargetBaldrApiServiceDeleteClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
