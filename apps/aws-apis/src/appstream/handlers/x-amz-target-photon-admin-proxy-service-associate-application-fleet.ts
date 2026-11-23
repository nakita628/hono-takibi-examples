import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceAssociateApplicationFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
