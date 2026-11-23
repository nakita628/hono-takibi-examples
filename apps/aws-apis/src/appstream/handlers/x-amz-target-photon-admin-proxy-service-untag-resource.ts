import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceUntagResourceHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
