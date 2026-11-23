import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateDistributionBundleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128UpdateDistributionBundleHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateDistributionBundleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
