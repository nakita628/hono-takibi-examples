import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceTagResourceHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
