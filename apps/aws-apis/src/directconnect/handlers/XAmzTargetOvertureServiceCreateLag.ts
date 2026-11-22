import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceCreateLagRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceCreateLagHandler = app.openapi(
  postXAmzTargetOvertureServiceCreateLagRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
