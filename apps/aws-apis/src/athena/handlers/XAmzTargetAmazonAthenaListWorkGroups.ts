import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListWorkGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListWorkGroupsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListWorkGroupsRoute,
  (c) => {},
)
