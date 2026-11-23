import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayRouteTableRoute,
  postActionCreateTransitGatewayRouteTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateTransitGatewayRouteTableHandler = app
  .openapi(getActionCreateTransitGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
