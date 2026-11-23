import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateStackHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
