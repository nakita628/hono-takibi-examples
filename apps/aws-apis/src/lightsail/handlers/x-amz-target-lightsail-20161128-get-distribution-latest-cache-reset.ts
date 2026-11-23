import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDistributionLatestCacheResetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetDistributionLatestCacheResetHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDistributionLatestCacheResetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
