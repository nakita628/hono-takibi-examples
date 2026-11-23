import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGluePutWorkflowRunPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGluePutWorkflowRunPropertiesHandler = app.openapi(
  postXAmzTargetAWSGluePutWorkflowRunPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
