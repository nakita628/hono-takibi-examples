import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIoTSecuredTunnelingTagResourceHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
