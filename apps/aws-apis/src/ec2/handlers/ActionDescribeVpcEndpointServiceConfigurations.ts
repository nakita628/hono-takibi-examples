import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpcEndpointServiceConfigurationsRoute,
  postActionDescribeVpcEndpointServiceConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcEndpointServiceConfigurationsHandler = app
  .openapi(getActionDescribeVpcEndpointServiceConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcEndpointServiceConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
