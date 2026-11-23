import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeApplicationsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
