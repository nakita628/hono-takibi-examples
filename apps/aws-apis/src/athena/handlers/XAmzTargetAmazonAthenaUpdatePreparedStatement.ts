import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdatePreparedStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaUpdatePreparedStatementHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdatePreparedStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
