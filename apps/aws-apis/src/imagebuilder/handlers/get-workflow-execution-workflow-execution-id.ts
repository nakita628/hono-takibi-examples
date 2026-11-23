import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetWorkflowExecutionWorkflowExecutionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const getWorkflowExecutionWorkflowExecutionIdHandler = app.openapi(
  getGetWorkflowExecutionWorkflowExecutionIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
