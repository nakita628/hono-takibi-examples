import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetStaticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetStaticIpHandler = app.openapi(
  postXAmzTargetLightsail20161128GetStaticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
