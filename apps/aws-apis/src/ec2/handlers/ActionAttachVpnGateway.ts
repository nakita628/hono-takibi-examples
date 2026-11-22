import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachVpnGatewayRoute, postActionAttachVpnGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAttachVpnGatewayHandler = app
  .openapi(getActionAttachVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachVpnGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
