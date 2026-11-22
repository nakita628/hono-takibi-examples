import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeSessionsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
