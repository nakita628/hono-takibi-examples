import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteDistributionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteDistributionHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteDistributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
