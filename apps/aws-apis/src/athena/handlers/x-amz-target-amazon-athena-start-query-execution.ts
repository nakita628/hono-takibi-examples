import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaStartQueryExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaStartQueryExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaStartQueryExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
