import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeFlowExecutionRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeFlowExecutionRecordsHandler = app.openapi(
  postDescribeFlowExecutionRecordsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
