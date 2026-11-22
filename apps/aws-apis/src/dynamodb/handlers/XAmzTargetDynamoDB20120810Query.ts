import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810QueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810QueryHandler = app.openapi(
  postXAmzTargetDynamoDB20120810QueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
