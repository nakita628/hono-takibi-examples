import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListTagsForResourceHandler = app.openapi(
  postXAmzTargetAmazonAthenaListTagsForResourceRoute,
  (c) => {},
)
