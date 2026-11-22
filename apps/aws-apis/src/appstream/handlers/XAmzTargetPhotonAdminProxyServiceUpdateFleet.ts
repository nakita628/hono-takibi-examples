import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUpdateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceUpdateFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUpdateFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
