import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingDescribeTunnelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIoTSecuredTunnelingDescribeTunnelHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingDescribeTunnelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
