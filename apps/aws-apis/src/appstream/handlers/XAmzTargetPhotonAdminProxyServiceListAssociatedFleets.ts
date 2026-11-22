import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceListAssociatedFleetsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceListAssociatedFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
