import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetWorkflowStepExecutionStepExecutionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const getWorkflowStepExecutionStepExecutionIdHandler = app.openapi(
  getGetWorkflowStepExecutionStepExecutionIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
