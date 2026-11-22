import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutMetricAlarmRoute, postActionPutMetricAlarmRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPutMetricAlarmHandler = app
  .openapi(getActionPutMetricAlarmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutMetricAlarmRoute, (c) => {
    throw new Error('Not implemented')
  })
