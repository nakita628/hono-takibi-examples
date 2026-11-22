import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceCreateUserHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
