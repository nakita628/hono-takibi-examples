import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceTagResourceHandler = app.openapi(
  postXAmzTargetOvertureServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
