import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayRouteTableAssociationsRoute,
  postActionGetTransitGatewayRouteTableAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetTransitGatewayRouteTableAssociationsHandler = app
  .openapi(getActionGetTransitGatewayRouteTableAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayRouteTableAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
