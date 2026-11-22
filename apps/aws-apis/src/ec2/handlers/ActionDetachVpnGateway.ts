import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachVpnGatewayRoute, postActionDetachVpnGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDetachVpnGatewayHandler = app
  .openapi(getActionDetachVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
