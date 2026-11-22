import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUpdateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceUpdateApplicationHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUpdateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
