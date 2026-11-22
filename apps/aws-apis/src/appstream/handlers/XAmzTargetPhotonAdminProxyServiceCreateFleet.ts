import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceCreateFleetHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
