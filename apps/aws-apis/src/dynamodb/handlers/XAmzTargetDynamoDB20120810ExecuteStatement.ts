import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ExecuteStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810ExecuteStatementHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ExecuteStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
