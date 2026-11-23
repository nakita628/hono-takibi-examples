import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRoute,
  postActionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler = app
  .openapi(getActionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
