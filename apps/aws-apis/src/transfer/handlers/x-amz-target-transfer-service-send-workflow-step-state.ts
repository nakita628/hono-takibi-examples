import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceSendWorkflowStepStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceSendWorkflowStepStateHandler = app.openapi(
  postXAmzTargetTransferServiceSendWorkflowStepStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
