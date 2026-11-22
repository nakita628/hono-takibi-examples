import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionReplaceVpnTunnelRoute, postActionReplaceVpnTunnelRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionReplaceVpnTunnelHandler = app
  .openapi(getActionReplaceVpnTunnelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReplaceVpnTunnelRoute, (c) => {
    throw new Error('Not implemented')
  })
