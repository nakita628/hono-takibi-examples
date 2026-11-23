import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateInterconnectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceCreateInterconnectHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateInterconnectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
