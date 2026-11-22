import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateVpnGatewayRoute, postActionCreateVpnGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateVpnGatewayHandler = app
  .openapi(getActionCreateVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
