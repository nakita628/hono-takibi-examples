import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteLocalGatewayRouteTableRoute,
  postActionDeleteLocalGatewayRouteTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteLocalGatewayRouteTableHandler = app
  .openapi(getActionDeleteLocalGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLocalGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
