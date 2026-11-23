import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateDirectoryConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
