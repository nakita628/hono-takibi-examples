import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDeleteUserHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
