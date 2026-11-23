import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDeleteApplicationHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
