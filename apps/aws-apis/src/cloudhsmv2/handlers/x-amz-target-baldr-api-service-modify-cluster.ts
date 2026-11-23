import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceModifyClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceModifyClusterHandler = app.openapi(
  postXAmzTargetBaldrApiServiceModifyClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
