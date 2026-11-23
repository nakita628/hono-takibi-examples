import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListWorkflowsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceListWorkflowsHandler = app.openapi(
  postXAmzTargetTransferServiceListWorkflowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
