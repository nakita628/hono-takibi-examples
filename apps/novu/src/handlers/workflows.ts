import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WorkflowsWorkflowIdRoute,
  getV2WorkflowsRoute,
  getV2WorkflowsWorkflowIdRoute,
  getV2WorkflowsWorkflowIdStepsStepIdRoute,
  patchV2WorkflowsWorkflowIdRoute,
  postV2WorkflowsRoute,
  postV2WorkflowsWorkflowIdStepStepIdPreviewRoute,
  putV2WorkflowsWorkflowIdRoute,
  putV2WorkflowsWorkflowIdSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(postV2WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WorkflowsWorkflowIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WorkflowsWorkflowIdStepStepIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WorkflowsWorkflowIdStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
