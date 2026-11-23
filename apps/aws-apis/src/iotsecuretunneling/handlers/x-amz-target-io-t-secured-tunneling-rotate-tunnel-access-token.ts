import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingRotateTunnelAccessTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
