import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
