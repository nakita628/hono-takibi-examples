import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingCloseTunnelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIoTSecuredTunnelingCloseTunnelHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingCloseTunnelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
