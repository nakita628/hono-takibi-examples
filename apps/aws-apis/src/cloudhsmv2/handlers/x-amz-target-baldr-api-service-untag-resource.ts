import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceUntagResourceHandler = app.openapi(
  postXAmzTargetBaldrApiServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
