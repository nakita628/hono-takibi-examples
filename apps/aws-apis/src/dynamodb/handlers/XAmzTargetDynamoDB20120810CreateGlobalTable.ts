import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810CreateGlobalTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810CreateGlobalTableHandler = app.openapi(
  postXAmzTargetDynamoDB20120810CreateGlobalTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
