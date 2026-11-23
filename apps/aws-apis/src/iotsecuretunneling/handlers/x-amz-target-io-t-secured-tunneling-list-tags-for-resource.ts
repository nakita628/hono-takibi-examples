import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIoTSecuredTunnelingListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIoTSecuredTunnelingListTagsForResourceHandler = app.openapi(
  postXAmzTargetIoTSecuredTunnelingListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
