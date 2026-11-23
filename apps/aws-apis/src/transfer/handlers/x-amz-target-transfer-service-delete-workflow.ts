import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteWorkflowHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
