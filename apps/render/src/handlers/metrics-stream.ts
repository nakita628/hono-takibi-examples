import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetricsStreamOwnerIdRoute,
  getMetricsStreamOwnerIdRoute,
  putMetricsStreamOwnerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsStreamHandler = app
  .openapi(getMetricsStreamOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetricsStreamOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetricsStreamOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
