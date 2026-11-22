import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteInterconnectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDeleteInterconnectHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteInterconnectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
