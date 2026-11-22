import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128ReleaseStaticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128ReleaseStaticIpHandler = app.openapi(
  postXAmzTargetLightsail20161128ReleaseStaticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
