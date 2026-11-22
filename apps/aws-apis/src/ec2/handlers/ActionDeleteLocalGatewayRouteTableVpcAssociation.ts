import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteLocalGatewayRouteTableVpcAssociationRoute,
  postActionDeleteLocalGatewayRouteTableVpcAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteLocalGatewayRouteTableVpcAssociationHandler = app
  .openapi(getActionDeleteLocalGatewayRouteTableVpcAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLocalGatewayRouteTableVpcAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
