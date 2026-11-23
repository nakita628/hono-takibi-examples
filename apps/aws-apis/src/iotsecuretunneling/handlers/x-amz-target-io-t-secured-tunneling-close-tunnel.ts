import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingCloseTunnelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIoTSecuredTunnelingCloseTunnelHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingCloseTunnelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
