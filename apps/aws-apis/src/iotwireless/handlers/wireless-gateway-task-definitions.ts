import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWirelessGatewayTaskDefinitionsIdRoute,
  getWirelessGatewayTaskDefinitionsIdRoute,
  getWirelessGatewayTaskDefinitionsRoute,
  postWirelessGatewayTaskDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessGatewayTaskDefinitionsHandler = app
  .openapi(postWirelessGatewayTaskDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessGatewayTaskDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessGatewayTaskDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessGatewayTaskDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
