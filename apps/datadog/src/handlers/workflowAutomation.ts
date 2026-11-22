import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2WorkflowsWorkflowIdRoute,
  getApiV2WorkflowsRoute,
  getApiV2WorkflowsWorkflowIdInstancesInstanceIdRoute,
  getApiV2WorkflowsWorkflowIdInstancesRoute,
  getApiV2WorkflowsWorkflowIdRoute,
  patchApiV2WorkflowsWorkflowIdRoute,
  postApiV2WorkflowsRoute,
  postApiV2WorkflowsWorkflowIdInstancesRoute,
  putApiV2WorkflowsWorkflowIdInstancesInstanceIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowAutomationHandler = app
  .openapi(getApiV2WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WorkflowsWorkflowIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WorkflowsWorkflowIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WorkflowsWorkflowIdInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2WorkflowsWorkflowIdInstancesInstanceIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
