import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeVpnGatewaysRoute, postActionDescribeVpnGatewaysRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeVpnGatewaysHandler = app
  .openapi(getActionDescribeVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpnGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
