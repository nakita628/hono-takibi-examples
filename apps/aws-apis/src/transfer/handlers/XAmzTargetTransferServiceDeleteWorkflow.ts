import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDeleteWorkflowHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
