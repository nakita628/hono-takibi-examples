import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchStopJobRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueBatchStopJobRunHandler = app.openapi(
  postXAmzTargetAWSGlueBatchStopJobRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
