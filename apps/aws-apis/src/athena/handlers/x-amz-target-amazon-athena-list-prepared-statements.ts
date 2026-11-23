import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListPreparedStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListPreparedStatementsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListPreparedStatementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
