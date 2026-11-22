import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsCreateConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsCreateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
