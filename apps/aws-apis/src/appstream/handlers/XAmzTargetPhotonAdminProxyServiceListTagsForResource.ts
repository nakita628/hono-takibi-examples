import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
