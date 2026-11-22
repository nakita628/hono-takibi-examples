import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAvailabilityOptionsRoute,
  postActionDescribeAvailabilityOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeAvailabilityOptionsHandler = app
  .openapi(getActionDescribeAvailabilityOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAvailabilityOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
