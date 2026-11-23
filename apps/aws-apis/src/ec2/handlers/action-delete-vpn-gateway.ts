import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteVpnGatewayRoute, postActionDeleteVpnGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVpnGatewayHandler = app
  .openapi(getActionDeleteVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
