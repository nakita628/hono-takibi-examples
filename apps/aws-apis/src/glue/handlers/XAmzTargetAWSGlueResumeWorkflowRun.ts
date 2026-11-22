import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueResumeWorkflowRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueResumeWorkflowRunHandler = app.openapi(
  postXAmzTargetAWSGlueResumeWorkflowRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
