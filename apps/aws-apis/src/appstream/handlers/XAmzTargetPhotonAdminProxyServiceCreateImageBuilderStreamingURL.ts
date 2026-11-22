import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateImageBuilderStreamingURLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
