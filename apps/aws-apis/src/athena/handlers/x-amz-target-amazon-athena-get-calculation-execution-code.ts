import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetCalculationExecutionCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetCalculationExecutionCodeHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetCalculationExecutionCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
