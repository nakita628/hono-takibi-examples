import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateEntitlementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateEntitlementHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateEntitlementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
