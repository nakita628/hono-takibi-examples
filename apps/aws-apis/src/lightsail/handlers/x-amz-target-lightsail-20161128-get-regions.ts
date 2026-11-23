import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRegionsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRegionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
