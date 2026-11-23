import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleHandler =
  app.openapi(postXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
