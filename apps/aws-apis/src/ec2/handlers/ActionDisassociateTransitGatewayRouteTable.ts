import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateTransitGatewayRouteTableRoute,
  postActionDisassociateTransitGatewayRouteTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisassociateTransitGatewayRouteTableHandler = app
  .openapi(getActionDisassociateTransitGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateTransitGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
