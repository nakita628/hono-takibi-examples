import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDeleteFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
