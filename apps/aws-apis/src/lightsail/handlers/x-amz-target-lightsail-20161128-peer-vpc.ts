import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128PeerVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128PeerVpcHandler = app.openapi(
  postXAmzTargetLightsail20161128PeerVpcRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
