import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128ResetDistributionCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128ResetDistributionCacheHandler = app.openapi(
  postXAmzTargetLightsail20161128ResetDistributionCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
