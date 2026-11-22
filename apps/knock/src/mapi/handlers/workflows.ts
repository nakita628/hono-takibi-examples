import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1WorkflowsWorkflowKeyRoute,
  getV1WorkflowsRoute,
  getV1WorkflowsWorkflowKeyRoute,
  postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRoute,
  putV1WorkflowsWorkflowKeyActivateRoute,
  putV1WorkflowsWorkflowKeyDiscardRoute,
  putV1WorkflowsWorkflowKeyRoute,
  putV1WorkflowsWorkflowKeyRunRoute,
  putV1WorkflowsWorkflowKeyUnarchiveRoute,
  putV1WorkflowsWorkflowKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(deleteV1WorkflowsWorkflowKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkflowsWorkflowKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
