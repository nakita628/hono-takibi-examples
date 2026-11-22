import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLocalGatewayVirtualInterfaceGroupsRoute,
  postActionDescribeLocalGatewayVirtualInterfaceGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeLocalGatewayVirtualInterfaceGroupsHandler = app
  .openapi(getActionDescribeLocalGatewayVirtualInterfaceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLocalGatewayVirtualInterfaceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
