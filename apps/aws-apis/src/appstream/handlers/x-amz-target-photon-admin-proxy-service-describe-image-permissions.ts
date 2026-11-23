import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeImagePermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
