import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingOpenTunnelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIoTSecuredTunnelingOpenTunnelHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingOpenTunnelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
