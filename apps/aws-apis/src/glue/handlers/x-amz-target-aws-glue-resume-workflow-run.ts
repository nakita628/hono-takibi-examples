import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueResumeWorkflowRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueResumeWorkflowRunHandler = app.openapi(
  postXAmzTargetAWSGlueResumeWorkflowRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
