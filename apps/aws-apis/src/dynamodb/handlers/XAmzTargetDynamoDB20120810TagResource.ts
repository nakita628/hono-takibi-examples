import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810TagResourceHandler = app.openapi(
  postXAmzTargetDynamoDB20120810TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
