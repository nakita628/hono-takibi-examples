import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetOperationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetOperationHandler = app.openapi(
  postXAmzTargetLightsail20161128GetOperationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
