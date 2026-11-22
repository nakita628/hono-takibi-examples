import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpcPeeringConnectionsRoute,
  postActionDescribeVpcPeeringConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcPeeringConnectionsHandler = app
  .openapi(getActionDescribeVpcPeeringConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcPeeringConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
