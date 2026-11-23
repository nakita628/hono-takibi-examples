import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateStreamingURLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateStreamingUrlHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateStreamingURLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
