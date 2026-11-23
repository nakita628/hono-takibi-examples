import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDeleteUserHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
