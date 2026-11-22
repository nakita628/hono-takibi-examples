import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateNamedQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaUpdateNamedQueryHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateNamedQueryRoute,
  (c) => {},
)
