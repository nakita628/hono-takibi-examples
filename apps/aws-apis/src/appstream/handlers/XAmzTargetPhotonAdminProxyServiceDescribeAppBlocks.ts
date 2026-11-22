import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeAppBlocksHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
