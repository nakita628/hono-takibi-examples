import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
