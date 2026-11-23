import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableTransitGatewayRouteTablePropagationRoute,
  postActionDisableTransitGatewayRouteTablePropagationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisableTransitGatewayRouteTablePropagationHandler = app
  .openapi(getActionDisableTransitGatewayRouteTablePropagationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableTransitGatewayRouteTablePropagationRoute, (c) => {
    throw new Error('Not implemented')
  })
