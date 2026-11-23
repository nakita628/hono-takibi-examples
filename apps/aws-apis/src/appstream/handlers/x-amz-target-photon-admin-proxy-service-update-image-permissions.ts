import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUpdateImagePermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
