import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteEntitlementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDeleteEntitlementHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteEntitlementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
