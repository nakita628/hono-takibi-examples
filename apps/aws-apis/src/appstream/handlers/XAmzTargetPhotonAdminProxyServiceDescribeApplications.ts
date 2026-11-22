import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeApplicationsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
