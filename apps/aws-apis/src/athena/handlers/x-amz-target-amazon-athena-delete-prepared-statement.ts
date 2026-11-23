import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeletePreparedStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaDeletePreparedStatementHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeletePreparedStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
