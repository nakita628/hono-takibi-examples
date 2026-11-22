import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeImageBuildersHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeImageBuildersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
