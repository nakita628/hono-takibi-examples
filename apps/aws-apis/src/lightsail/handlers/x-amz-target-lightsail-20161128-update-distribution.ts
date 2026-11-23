import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateDistributionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128UpdateDistributionHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateDistributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
