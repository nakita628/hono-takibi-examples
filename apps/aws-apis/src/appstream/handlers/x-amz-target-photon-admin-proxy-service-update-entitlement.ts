import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUpdateEntitlementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceUpdateEntitlementHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUpdateEntitlementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
