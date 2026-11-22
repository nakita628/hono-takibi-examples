import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetNamedQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetNamedQueryHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetNamedQueryRoute,
  (c) => {},
)
