import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128AttachStaticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128AttachStaticIpHandler = app.openapi(
  postXAmzTargetLightsail20161128AttachStaticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
