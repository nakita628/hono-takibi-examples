import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128TagResourceHandler = app.openapi(
  postXAmzTargetLightsail20161128TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
