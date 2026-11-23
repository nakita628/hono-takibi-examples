import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateBandwidthRateLimitScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
