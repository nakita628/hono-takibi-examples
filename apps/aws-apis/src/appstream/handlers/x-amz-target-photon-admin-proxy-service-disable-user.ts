import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDisableUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDisableUserHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDisableUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
