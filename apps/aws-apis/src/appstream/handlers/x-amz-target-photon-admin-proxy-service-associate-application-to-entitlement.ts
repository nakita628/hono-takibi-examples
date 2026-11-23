import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementHandler =
  app.openapi(postXAmzTargetPhotonAdminProxyServiceAssociateApplicationToEntitlementRoute, (c) => {
    throw new Error('Not implemented')
  })
