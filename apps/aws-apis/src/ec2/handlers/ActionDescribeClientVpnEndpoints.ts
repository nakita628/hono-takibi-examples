import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClientVpnEndpointsRoute,
  postActionDescribeClientVpnEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeClientVpnEndpointsHandler = app
  .openapi(getActionDescribeClientVpnEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClientVpnEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
