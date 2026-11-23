import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeAlarmHistoryRoute, postActionDescribeAlarmHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAlarmHistoryHandler = app
  .openapi(getActionDescribeAlarmHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAlarmHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
