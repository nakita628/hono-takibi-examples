import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetCalculationExecutionCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetCalculationExecutionCodeHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetCalculationExecutionCodeRoute,
  (c) => {},
)
