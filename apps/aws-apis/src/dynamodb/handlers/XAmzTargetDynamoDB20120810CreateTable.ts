import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810CreateTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810CreateTableHandler = app.openapi(
  postXAmzTargetDynamoDB20120810CreateTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
