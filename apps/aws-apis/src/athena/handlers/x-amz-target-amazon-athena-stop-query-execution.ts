import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaStopQueryExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaStopQueryExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaStopQueryExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
