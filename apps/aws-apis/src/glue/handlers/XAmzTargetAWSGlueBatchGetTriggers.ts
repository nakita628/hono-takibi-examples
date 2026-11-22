import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetTriggersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueBatchGetTriggersHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetTriggersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
