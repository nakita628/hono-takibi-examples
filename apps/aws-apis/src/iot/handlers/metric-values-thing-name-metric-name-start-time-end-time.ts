import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetricValuesThingNameMetricNameStartTimeEndTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const metricValuesThingNameMetricNameStartTimeEndTimeHandler = app.openapi(
  getMetricValuesThingNameMetricNameStartTimeEndTimeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
