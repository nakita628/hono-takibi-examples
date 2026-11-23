import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetTriggersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchGetTriggersHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetTriggersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
