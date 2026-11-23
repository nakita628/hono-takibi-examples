import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOvertureServiceCreateConnectionHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
