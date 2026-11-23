import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetOperationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetOperationsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetOperationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
