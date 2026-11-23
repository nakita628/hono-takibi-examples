import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetCalculationExecutionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetCalculationExecutionStatusHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetCalculationExecutionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
