import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeAlarmsRoute, postActionDescribeAlarmsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAlarmsHandler = app
  .openapi(getActionDescribeAlarmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAlarmsRoute, (c) => {
    throw new Error('Not implemented')
  })
