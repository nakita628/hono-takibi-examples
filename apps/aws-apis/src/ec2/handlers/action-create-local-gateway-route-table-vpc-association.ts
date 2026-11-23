import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLocalGatewayRouteTableVpcAssociationRoute,
  postActionCreateLocalGatewayRouteTableVpcAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateLocalGatewayRouteTableVpcAssociationHandler = app
  .openapi(getActionCreateLocalGatewayRouteTableVpcAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLocalGatewayRouteTableVpcAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
