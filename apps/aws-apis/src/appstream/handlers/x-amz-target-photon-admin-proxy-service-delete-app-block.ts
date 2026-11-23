import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteAppBlockRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDeleteAppBlockHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteAppBlockRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
