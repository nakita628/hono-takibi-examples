import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceAllocateHostedConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceAllocateHostedConnectionHandler = app.openapi(
  postXAmzTargetOvertureServiceAllocateHostedConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
