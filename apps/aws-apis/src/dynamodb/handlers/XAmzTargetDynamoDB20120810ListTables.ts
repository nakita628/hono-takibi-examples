import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ListTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810ListTablesHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ListTablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
