import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceUntagResourceHandler = app.openapi(
  postXAmzTargetOvertureServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
