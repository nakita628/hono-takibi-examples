import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaStopQueryExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaStopQueryExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaStopQueryExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
