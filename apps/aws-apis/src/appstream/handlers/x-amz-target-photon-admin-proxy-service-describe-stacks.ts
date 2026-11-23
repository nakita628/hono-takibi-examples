import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeStacksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeStacksHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeStacksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
