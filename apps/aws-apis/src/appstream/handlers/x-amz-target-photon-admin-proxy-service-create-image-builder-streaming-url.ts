import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingUrlHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
