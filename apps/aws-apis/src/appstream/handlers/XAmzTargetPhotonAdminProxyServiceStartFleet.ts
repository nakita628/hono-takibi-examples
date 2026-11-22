import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceStartFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceStartFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceStartFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
