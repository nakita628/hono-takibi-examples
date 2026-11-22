import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceStopImageBuilderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceStopImageBuilderHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceStopImageBuilderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
