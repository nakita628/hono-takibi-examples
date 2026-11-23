import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeScheduledInstancesRoute,
  postActionDescribeScheduledInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeScheduledInstancesHandler = app
  .openapi(getActionDescribeScheduledInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeScheduledInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
