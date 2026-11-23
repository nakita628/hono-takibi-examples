import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionReplaceTransitGatewayRouteRoute,
  postActionReplaceTransitGatewayRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionReplaceTransitGatewayRouteHandler = app
  .openapi(getActionReplaceTransitGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReplaceTransitGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
