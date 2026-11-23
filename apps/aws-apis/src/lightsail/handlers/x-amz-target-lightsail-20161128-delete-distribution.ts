import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteDistributionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteDistributionHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteDistributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
