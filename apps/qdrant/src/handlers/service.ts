import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthzRoute,
  getLivezRoute,
  getMetricsRoute,
  getReadyzRoute,
  getRoute,
  getTelemetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLivezRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReadyzRoute, (c) => {
    throw new Error('Not implemented')
  })
