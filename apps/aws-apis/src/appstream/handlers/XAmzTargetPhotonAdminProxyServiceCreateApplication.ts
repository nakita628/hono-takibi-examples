import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceCreateApplicationHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
