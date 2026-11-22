import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkflowsStepCompletedRoute,
  getWorkflowsStepFailedRoute,
  getWorkflowsUpdateStepRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getWorkflowsStepCompletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsStepFailedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsUpdateStepRoute, (c) => {
    throw new Error('Not implemented')
  })
