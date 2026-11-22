import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaBatchGetQueryExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaBatchGetQueryExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaBatchGetQueryExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
