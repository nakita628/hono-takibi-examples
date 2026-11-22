import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchDeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueBatchDeleteConnectionHandler = app.openapi(
  postXAmzTargetAWSGlueBatchDeleteConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
