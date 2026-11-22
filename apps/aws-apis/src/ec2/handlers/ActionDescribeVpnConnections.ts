import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpnConnectionsRoute,
  postActionDescribeVpnConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpnConnectionsHandler = app
  .openapi(getActionDescribeVpnConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpnConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
