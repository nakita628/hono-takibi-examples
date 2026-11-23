import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingListTunnelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIoTSecuredTunnelingListTunnelsHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingListTunnelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
