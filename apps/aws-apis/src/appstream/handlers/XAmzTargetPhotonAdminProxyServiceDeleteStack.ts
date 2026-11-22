import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteStackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDeleteStackHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
