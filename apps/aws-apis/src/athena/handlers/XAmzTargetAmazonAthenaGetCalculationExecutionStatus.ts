import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetCalculationExecutionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetCalculationExecutionStatusHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetCalculationExecutionStatusRoute,
  (c) => {},
)
