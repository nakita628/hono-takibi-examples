import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIoTSecuredTunnelingUntagResourceHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
