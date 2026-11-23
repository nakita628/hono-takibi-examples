import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClientVpnEndpointsRoute,
  postActionDescribeClientVpnEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClientVpnEndpointsHandler = app
  .openapi(getActionDescribeClientVpnEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClientVpnEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
