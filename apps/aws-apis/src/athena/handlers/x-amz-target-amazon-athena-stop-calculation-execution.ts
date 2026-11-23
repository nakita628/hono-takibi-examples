import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaStopCalculationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaStopCalculationExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaStopCalculationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
