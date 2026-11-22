import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaBatchGetPreparedStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaBatchGetPreparedStatementHandler = app.openapi(
  postXAmzTargetAmazonAthenaBatchGetPreparedStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
