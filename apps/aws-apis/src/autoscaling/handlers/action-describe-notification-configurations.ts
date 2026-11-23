import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNotificationConfigurationsRoute,
  postActionDescribeNotificationConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeNotificationConfigurationsHandler = app
  .openapi(getActionDescribeNotificationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNotificationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
