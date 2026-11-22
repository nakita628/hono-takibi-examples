import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetQueryExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetQueryExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetQueryExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
