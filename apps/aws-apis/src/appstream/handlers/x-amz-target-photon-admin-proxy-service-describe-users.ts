import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeUsersHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
