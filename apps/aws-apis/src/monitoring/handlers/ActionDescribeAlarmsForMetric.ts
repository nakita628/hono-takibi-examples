import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAlarmsForMetricRoute,
  postActionDescribeAlarmsForMetricRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAlarmsForMetricHandler = app
  .openapi(getActionDescribeAlarmsForMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAlarmsForMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
