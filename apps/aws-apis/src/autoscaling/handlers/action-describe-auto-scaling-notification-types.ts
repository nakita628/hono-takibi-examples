import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAutoScalingNotificationTypesRoute,
  postActionDescribeAutoScalingNotificationTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAutoScalingNotificationTypesHandler = app
  .openapi(getActionDescribeAutoScalingNotificationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAutoScalingNotificationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
