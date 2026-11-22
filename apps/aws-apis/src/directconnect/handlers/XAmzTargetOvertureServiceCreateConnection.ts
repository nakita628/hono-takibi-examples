import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceCreateConnectionHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
