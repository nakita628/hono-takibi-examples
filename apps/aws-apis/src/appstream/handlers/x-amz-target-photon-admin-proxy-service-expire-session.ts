import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceExpireSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceExpireSessionHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceExpireSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
