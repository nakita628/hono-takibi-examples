import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeUserStackAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
