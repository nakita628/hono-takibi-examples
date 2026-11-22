import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1MetricGroupsIdRoute,
  getV1MetricGroupsIdRoute,
  getV1MetricGroupsRoute,
  postV1MetricGroupsRoute,
  putV1MetricGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricGroupsHandler = app
  .openapi(getV1MetricGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MetricGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MetricGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
