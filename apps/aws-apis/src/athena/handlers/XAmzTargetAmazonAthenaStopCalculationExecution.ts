import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaStopCalculationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaStopCalculationExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaStopCalculationExecutionRoute,
  (c) => {},
)
