import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DetachStaticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DetachStaticIpHandler = app.openapi(
  postXAmzTargetLightsail20161128DetachStaticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
