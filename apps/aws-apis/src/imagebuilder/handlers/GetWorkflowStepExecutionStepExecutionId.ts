import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetWorkflowStepExecutionStepExecutionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const GetWorkflowStepExecutionStepExecutionIdHandler = app.openapi(
  getGetWorkflowStepExecutionStepExecutionIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
