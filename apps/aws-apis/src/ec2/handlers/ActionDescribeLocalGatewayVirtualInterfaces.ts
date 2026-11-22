import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLocalGatewayVirtualInterfacesRoute,
  postActionDescribeLocalGatewayVirtualInterfacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeLocalGatewayVirtualInterfacesHandler = app
  .openapi(getActionDescribeLocalGatewayVirtualInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLocalGatewayVirtualInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
