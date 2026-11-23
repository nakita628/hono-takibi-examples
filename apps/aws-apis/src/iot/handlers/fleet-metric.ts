import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFleetMetricMetricNameRoute,
  getFleetMetricMetricNameRoute,
  patchFleetMetricMetricNameRoute,
  putFleetMetricMetricNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fleetMetricHandler = app
  .openapi(putFleetMetricMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFleetMetricMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFleetMetricMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFleetMetricMetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
