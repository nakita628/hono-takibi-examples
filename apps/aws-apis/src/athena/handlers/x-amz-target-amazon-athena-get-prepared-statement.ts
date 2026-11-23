import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetPreparedStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetPreparedStatementHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetPreparedStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
