import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaTerminateSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaTerminateSessionHandler = app.openapi(
  postXAmzTargetAmazonAthenaTerminateSessionRoute,
  (c) => {},
)
