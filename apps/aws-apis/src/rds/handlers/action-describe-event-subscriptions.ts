import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEventSubscriptionsRoute,
  postActionDescribeEventSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEventSubscriptionsHandler = app
  .openapi(getActionDescribeEventSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEventSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
