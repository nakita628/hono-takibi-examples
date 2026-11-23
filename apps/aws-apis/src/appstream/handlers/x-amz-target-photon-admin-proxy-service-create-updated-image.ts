import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateUpdatedImageHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateUpdatedImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
