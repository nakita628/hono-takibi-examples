import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810BatchExecuteStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810BatchExecuteStatementHandler = app.openapi(
  postXAmzTargetDynamoDB20120810BatchExecuteStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
