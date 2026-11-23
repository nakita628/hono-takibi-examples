import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPhotonAdminProxyServiceDescribeAppBlocksHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeAppBlocksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
