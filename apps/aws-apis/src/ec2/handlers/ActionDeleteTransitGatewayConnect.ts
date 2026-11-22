import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayConnectRoute,
  postActionDeleteTransitGatewayConnectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTransitGatewayConnectHandler = app
  .openapi(getActionDeleteTransitGatewayConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
