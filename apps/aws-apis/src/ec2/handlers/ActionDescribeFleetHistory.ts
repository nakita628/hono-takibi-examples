import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeFleetHistoryRoute, postActionDescribeFleetHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeFleetHistoryHandler = app
  .openapi(getActionDescribeFleetHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeFleetHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
