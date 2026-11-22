import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceCreateImageBuilderHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
