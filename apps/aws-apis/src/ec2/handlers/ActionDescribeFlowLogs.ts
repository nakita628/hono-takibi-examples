import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeFlowLogsRoute, postActionDescribeFlowLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeFlowLogsHandler = app
  .openapi(getActionDescribeFlowLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeFlowLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
