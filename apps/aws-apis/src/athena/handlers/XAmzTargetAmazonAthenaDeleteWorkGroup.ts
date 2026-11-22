import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeleteWorkGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaDeleteWorkGroupHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeleteWorkGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
