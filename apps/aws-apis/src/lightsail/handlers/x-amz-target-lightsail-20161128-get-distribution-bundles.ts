import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDistributionBundlesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetDistributionBundlesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDistributionBundlesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
