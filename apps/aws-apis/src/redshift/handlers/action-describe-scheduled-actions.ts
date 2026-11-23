import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeScheduledActionsRoute,
  postActionDescribeScheduledActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeScheduledActionsHandler = app
  .openapi(getActionDescribeScheduledActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeScheduledActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
