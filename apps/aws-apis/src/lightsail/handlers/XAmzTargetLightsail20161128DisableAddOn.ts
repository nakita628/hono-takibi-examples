import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DisableAddOnRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DisableAddOnHandler = app.openapi(
  postXAmzTargetLightsail20161128DisableAddOnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
