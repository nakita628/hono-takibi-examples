import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaBatchGetQueryExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaBatchGetQueryExecutionHandler = app.openapi(
  postXAmzTargetAmazonAthenaBatchGetQueryExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
