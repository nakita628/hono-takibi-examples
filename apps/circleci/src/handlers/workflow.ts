import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkflowIdJobRoute,
  getWorkflowIdRoute,
  postWorkflowIdApproveApprovalRequestIdRoute,
  postWorkflowIdCancelRoute,
  postWorkflowIdRerunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowHandler = app
  .openapi(postWorkflowIdApproveApprovalRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowIdJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowIdRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
