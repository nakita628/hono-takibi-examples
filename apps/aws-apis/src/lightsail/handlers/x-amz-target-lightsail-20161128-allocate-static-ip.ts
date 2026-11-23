import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128AllocateStaticIpRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128AllocateStaticIpHandler = app.openapi(
  postXAmzTargetLightsail20161128AllocateStaticIpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
