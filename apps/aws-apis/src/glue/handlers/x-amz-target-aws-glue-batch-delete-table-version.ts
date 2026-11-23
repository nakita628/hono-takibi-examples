import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchDeleteTableVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchDeleteTableVersionHandler = app.openapi(
  postXAmzTargetAWSGlueBatchDeleteTableVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
