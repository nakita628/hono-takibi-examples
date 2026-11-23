import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyLocalGatewayRouteRoute,
  postActionModifyLocalGatewayRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyLocalGatewayRouteHandler = app
  .openapi(getActionModifyLocalGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyLocalGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
