import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceUpdateStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceUpdateStackHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceUpdateStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
