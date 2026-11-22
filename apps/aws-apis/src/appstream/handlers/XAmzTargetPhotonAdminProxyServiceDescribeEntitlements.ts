import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeEntitlementsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeEntitlementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
