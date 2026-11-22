import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceUntagResourceHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
