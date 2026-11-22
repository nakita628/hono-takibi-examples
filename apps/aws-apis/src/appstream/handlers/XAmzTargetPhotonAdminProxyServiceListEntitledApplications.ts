import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceListEntitledApplicationsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceListEntitledApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
