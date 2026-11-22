import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630UpdateBandwidthRateLimitHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
