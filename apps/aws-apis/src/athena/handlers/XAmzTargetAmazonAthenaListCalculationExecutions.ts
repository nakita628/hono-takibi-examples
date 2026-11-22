import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListCalculationExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListCalculationExecutionsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListCalculationExecutionsRoute,
  (c) => {},
)
