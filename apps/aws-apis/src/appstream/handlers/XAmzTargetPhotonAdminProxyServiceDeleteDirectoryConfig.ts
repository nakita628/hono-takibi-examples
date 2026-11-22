import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteDirectoryConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
