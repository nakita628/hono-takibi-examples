import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIoTSecuredTunnelingListTagsForResourceHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
