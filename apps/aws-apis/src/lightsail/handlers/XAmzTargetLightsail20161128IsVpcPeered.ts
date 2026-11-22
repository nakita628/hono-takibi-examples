import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128IsVpcPeeredRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128IsVpcPeeredHandler = app.openapi(
  postXAmzTargetLightsail20161128IsVpcPeeredRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
