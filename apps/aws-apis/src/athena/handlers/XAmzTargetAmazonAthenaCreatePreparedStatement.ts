import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreatePreparedStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaCreatePreparedStatementHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreatePreparedStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
