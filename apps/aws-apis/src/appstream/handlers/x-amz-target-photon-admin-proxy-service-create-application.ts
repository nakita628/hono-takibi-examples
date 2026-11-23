import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateApplicationHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
