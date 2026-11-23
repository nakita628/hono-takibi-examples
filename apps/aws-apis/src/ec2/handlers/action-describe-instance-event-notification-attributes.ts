import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceEventNotificationAttributesRoute,
  postActionDescribeInstanceEventNotificationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeInstanceEventNotificationAttributesHandler = app
  .openapi(getActionDescribeInstanceEventNotificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceEventNotificationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
