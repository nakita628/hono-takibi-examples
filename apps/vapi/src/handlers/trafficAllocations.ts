import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTrafficAllocationsIdRoute,
  getTrafficAllocationsLatestRoute,
  getTrafficAllocationsMetricsRoute,
  getTrafficAllocationsRoute,
  postTrafficAllocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trafficAllocationsHandler = app
  .openapi(postTrafficAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficAllocationsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficAllocationsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
