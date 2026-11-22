import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayRouteRoute,
  postActionCreateTransitGatewayRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTransitGatewayRouteHandler = app
  .openapi(getActionCreateTransitGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
