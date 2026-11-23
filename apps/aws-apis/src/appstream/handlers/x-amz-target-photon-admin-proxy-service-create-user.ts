import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateUserHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
