import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
