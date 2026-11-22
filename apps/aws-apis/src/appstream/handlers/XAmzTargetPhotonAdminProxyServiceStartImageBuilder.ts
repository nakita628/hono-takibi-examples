import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceStartImageBuilderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceStartImageBuilderHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceStartImageBuilderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
