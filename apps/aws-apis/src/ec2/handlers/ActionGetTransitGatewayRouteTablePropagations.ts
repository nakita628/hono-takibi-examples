import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayRouteTablePropagationsRoute,
  postActionGetTransitGatewayRouteTablePropagationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetTransitGatewayRouteTablePropagationsHandler = app
  .openapi(getActionGetTransitGatewayRouteTablePropagationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayRouteTablePropagationsRoute, (c) => {
    throw new Error('Not implemented')
  })
