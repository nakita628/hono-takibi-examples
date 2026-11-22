import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceCreateWorkflowHandler = app.openapi(
  postXAmzTargetTransferServiceCreateWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
