import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRoute,
  postActionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHandler = app
  .openapi(getActionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
