import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceListAssociatedStacksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceListAssociatedStacksHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceListAssociatedStacksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
