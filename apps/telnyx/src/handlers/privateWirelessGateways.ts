import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrivateWirelessGatewaysIdRoute,
  getPrivateWirelessGatewaysIdRoute,
  getPrivateWirelessGatewaysRoute,
  postPrivateWirelessGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privateWirelessGatewaysHandler = app
  .openapi(getPrivateWirelessGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrivateWirelessGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrivateWirelessGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivateWirelessGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
