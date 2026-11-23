import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClientVpnConnectionsRoute,
  postActionDescribeClientVpnConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClientVpnConnectionsHandler = app
  .openapi(getActionDescribeClientVpnConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClientVpnConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
