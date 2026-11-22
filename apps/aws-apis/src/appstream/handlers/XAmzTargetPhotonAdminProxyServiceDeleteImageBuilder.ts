import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDeleteImageBuilderHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteImageBuilderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
