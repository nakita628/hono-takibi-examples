import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetWorkGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetWorkGroupHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetWorkGroupRoute,
  (c) => {},
)
