import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateLocalGatewayRouteTableRoute,
  postActionCreateLocalGatewayRouteTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateLocalGatewayRouteTableHandler = app
  .openapi(getActionCreateLocalGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateLocalGatewayRouteTableRoute, (c) => {
    throw new Error('Not implemented')
  })
