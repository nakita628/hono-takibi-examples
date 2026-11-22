import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1MetricsIdRoute,
  getV1MetricsIdExperimentsRoute,
  getV1MetricsIdRoute,
  getV1MetricsRoute,
  postV1MetricsRoute,
  putV1MetricsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getV1MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MetricsIdExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
