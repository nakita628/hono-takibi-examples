import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDescribeWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDescribeWorkflowHandler = app.openapi(
  postXAmzTargetTransferServiceDescribeWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
