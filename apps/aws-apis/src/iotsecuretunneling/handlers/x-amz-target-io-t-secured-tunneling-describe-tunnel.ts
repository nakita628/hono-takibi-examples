import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingDescribeTunnelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIoTSecuredTunnelingDescribeTunnelHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingDescribeTunnelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
