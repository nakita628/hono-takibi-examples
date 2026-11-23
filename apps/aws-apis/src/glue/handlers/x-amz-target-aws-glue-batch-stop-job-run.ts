import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchStopJobRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchStopJobRunHandler = app.openapi(
  postXAmzTargetAWSGlueBatchStopJobRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
