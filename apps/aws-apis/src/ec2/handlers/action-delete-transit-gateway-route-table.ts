import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayRouteTableRoute,
  postActionDeleteTransitGatewayRouteTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTransitGatewayRouteTableHandler = app
  .openapi(getActionDeleteTransitGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
