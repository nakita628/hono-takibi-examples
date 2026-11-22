import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UpdateTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810UpdateTableHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UpdateTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
