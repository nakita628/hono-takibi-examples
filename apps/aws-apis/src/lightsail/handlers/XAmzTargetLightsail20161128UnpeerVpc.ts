import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UnpeerVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128UnpeerVpcHandler = app.openapi(
  postXAmzTargetLightsail20161128UnpeerVpcRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
