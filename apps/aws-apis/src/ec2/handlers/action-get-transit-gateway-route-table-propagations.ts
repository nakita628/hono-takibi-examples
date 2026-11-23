import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetTransitGatewayRouteTablePropagationsRoute,
  postActionGetTransitGatewayRouteTablePropagationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetTransitGatewayRouteTablePropagationsHandler = app
  .openapi(getActionGetTransitGatewayRouteTablePropagationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTransitGatewayRouteTablePropagationsRoute, (c) => {
    throw new Error('Not implemented')
  })
