import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableTransitGatewayRouteTablePropagationRoute,
  postActionEnableTransitGatewayRouteTablePropagationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableTransitGatewayRouteTablePropagationHandler = app
  .openapi(getActionEnableTransitGatewayRouteTablePropagationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableTransitGatewayRouteTablePropagationRoute, (c) => {
    throw new Error('Not implemented')
  })
