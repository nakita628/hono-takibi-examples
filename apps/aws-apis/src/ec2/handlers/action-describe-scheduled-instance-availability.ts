import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeScheduledInstanceAvailabilityRoute,
  postActionDescribeScheduledInstanceAvailabilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeScheduledInstanceAvailabilityHandler = app
  .openapi(getActionDescribeScheduledInstanceAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeScheduledInstanceAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
