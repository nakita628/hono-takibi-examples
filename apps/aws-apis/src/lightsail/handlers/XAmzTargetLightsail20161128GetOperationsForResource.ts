import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetOperationsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetOperationsForResourceHandler = app.openapi(
  postXAmzTargetLightsail20161128GetOperationsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
