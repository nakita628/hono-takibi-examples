import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDistributionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetDistributionsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDistributionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
