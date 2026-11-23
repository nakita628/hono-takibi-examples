import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DeleteBandwidthRateLimitHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteBandwidthRateLimitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
