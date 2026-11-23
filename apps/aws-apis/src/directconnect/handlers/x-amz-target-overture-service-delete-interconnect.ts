import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDeleteInterconnectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceDeleteInterconnectHandler = app.openapi(
  postXAmzTargetOvertureServiceDeleteInterconnectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
