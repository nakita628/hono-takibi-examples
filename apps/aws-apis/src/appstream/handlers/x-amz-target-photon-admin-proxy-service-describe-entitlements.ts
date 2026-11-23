import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeEntitlementsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
