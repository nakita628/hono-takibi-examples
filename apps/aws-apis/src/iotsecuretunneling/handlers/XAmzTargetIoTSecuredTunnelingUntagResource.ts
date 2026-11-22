import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIoTSecuredTunnelingUntagResourceHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
