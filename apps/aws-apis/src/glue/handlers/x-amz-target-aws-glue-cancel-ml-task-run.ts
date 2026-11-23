import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCancelMLTaskRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCancelMlTaskRunHandler = app.openapi(
  postXAmzTargetAWSGlueCancelMLTaskRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
