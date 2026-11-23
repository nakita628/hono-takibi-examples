import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceStartImageBuilderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceStartImageBuilderHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceStartImageBuilderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
