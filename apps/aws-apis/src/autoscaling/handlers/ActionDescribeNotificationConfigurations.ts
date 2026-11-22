import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNotificationConfigurationsRoute,
  postActionDescribeNotificationConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeNotificationConfigurationsHandler = app
  .openapi(getActionDescribeNotificationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNotificationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
