import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceEnableUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceEnableUserHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceEnableUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
