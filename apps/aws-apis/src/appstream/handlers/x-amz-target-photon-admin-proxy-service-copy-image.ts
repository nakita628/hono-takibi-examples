import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCopyImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCopyImageHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCopyImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
