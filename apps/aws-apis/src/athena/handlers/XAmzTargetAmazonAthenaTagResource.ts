import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaTagResourceHandler = app.openapi(
  postXAmzTargetAmazonAthenaTagResourceRoute,
  (c) => {},
)
