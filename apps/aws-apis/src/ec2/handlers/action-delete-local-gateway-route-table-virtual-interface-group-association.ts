import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRoute,
  postActionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler = app
  .openapi(getActionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
