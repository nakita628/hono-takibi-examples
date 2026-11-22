import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDeleteApplicationHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
