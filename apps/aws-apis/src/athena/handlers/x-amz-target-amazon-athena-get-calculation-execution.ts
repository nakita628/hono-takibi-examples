import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetCalculationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetCalculationExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetCalculationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
