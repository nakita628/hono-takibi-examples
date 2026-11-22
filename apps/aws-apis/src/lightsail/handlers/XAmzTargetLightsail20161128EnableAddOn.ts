import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128EnableAddOnRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128EnableAddOnHandler = app.openapi(
  postXAmzTargetLightsail20161128EnableAddOnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
