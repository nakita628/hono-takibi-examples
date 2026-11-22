import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetSessionHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetSessionRoute,
  (c) => {},
)
