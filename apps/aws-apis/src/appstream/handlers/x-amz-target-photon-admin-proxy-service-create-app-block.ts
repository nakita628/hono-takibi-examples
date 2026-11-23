import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceCreateAppBlockRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceCreateAppBlockHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceCreateAppBlockRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
