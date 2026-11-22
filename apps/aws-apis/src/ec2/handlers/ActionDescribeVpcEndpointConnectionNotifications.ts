import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpcEndpointConnectionNotificationsRoute,
  postActionDescribeVpcEndpointConnectionNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcEndpointConnectionNotificationsHandler = app
  .openapi(getActionDescribeVpcEndpointConnectionNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcEndpointConnectionNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
