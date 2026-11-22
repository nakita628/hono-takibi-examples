import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceAssociateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceAssociateFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceAssociateFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
