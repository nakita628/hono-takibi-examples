import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAllocateConnectionOnInterconnectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceAllocateConnectionOnInterconnectHandler = app.openapi(
  postXAmzTargetOvertureServiceAllocateConnectionOnInterconnectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
