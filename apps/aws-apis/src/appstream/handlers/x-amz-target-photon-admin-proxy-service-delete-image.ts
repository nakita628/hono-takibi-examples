import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDeleteImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDeleteImageHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDeleteImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
