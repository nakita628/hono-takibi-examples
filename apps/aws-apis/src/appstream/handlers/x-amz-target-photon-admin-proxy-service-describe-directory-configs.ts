import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeDirectoryConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
