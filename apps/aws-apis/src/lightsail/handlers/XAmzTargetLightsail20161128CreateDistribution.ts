import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateDistributionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateDistributionHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateDistributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
