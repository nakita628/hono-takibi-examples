import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUpdateDirectoryConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
