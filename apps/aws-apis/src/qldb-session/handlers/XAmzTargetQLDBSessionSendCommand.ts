import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetQLDBSessionSendCommandRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetQLDBSessionSendCommandHandler = app.openapi(
  postXAmzTargetQLDBSessionSendCommandRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
