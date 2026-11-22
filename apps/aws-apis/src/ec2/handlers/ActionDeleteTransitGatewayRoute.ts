import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayRouteRoute,
  postActionDeleteTransitGatewayRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTransitGatewayRouteHandler = app
  .openapi(getActionDeleteTransitGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
