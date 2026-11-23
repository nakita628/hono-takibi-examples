import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeSessionsHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
