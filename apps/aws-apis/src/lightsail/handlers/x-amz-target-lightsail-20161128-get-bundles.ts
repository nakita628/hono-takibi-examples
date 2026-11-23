import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetBundlesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetBundlesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetBundlesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
