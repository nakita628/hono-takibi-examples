import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayConnectPeerRoute,
  postActionDeleteTransitGatewayConnectPeerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTransitGatewayConnectPeerHandler = app
  .openapi(getActionDeleteTransitGatewayConnectPeerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayConnectPeerRoute, (c) => {
    throw new Error('Not implemented')
  })
