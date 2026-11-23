import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayConnectPeerRoute,
  postActionCreateTransitGatewayConnectPeerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateTransitGatewayConnectPeerHandler = app
  .openapi(getActionCreateTransitGatewayConnectPeerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayConnectPeerRoute, (c) => {
    throw new Error('Not implemented')
  })
