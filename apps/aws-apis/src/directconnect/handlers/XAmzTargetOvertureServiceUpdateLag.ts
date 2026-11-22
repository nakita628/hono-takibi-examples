import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceUpdateLagRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceUpdateLagHandler = app.openapi(
  postXAmzTargetOvertureServiceUpdateLagRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
