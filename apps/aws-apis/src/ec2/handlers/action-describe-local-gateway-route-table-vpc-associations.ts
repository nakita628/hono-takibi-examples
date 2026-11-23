import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLocalGatewayRouteTableVpcAssociationsRoute,
  postActionDescribeLocalGatewayRouteTableVpcAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLocalGatewayRouteTableVpcAssociationsHandler = app
  .openapi(getActionDescribeLocalGatewayRouteTableVpcAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLocalGatewayRouteTableVpcAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
