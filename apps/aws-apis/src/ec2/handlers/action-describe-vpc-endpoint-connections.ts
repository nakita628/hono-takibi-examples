import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpcEndpointConnectionsRoute,
  postActionDescribeVpcEndpointConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeVpcEndpointConnectionsHandler = app
  .openapi(getActionDescribeVpcEndpointConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcEndpointConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
