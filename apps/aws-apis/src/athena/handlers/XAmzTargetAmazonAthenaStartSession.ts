import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaStartSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaStartSessionHandler = app.openapi(
  postXAmzTargetAmazonAthenaStartSessionRoute,
  (c) => {},
)
