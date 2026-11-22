import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteLocalGatewayRouteRoute,
  postActionDeleteLocalGatewayRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteLocalGatewayRouteHandler = app
  .openapi(getActionDeleteLocalGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLocalGatewayRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
