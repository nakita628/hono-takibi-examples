import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteAppBlockRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDeleteAppBlockHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteAppBlockRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
