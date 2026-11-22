import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementHandler =
  app.openapi(postXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementRoute, (c) => {
    throw new Error('Not implemented')
  })
