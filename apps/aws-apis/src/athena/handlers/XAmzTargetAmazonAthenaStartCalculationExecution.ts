import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaStartCalculationExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaStartCalculationExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaStartCalculationExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
