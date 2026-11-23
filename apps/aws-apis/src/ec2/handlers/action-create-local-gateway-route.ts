import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLocalGatewayRouteRoute,
  postActionCreateLocalGatewayRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateLocalGatewayRouteHandler = app
  .openapi(getActionCreateLocalGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLocalGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
