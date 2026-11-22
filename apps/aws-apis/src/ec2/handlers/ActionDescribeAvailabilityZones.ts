import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAvailabilityZonesRoute,
  postActionDescribeAvailabilityZonesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAvailabilityZonesHandler = app
  .openapi(getActionDescribeAvailabilityZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAvailabilityZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
