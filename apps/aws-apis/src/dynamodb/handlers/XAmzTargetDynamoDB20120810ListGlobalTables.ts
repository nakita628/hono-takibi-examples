import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ListGlobalTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810ListGlobalTablesHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ListGlobalTablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
