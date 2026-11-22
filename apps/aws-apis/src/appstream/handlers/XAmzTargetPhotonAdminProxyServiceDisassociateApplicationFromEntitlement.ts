import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementHandler =
  app.openapi(
    postXAmzTargetPhotonAdminProxyServiceDisassociateApplicationFromEntitlementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
