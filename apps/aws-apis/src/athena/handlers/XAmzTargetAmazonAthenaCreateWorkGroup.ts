import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreateWorkGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaCreateWorkGroupHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreateWorkGroupRoute,
  (c) => {},
)
