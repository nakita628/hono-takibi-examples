import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeBandwidthRateLimitHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeBandwidthRateLimitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
