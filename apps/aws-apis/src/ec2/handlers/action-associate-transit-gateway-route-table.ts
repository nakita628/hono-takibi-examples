import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateTransitGatewayRouteTableRoute,
  postActionAssociateTransitGatewayRouteTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateTransitGatewayRouteTableHandler = app
  .openapi(getActionAssociateTransitGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateTransitGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
