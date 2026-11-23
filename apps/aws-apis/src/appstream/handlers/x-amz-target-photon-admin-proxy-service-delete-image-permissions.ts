import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteImagePermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
