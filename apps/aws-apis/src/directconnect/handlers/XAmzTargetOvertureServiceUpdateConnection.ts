import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceUpdateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceUpdateConnectionHandler = app.openapi(
  postXAmzTargetOvertureServiceUpdateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
