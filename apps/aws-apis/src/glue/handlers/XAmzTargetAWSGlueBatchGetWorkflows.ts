import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetWorkflowsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueBatchGetWorkflowsHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetWorkflowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
