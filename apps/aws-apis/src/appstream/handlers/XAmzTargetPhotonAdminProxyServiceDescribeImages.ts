import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPhotonAdminProxyServiceDescribeImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetPhotonAdminProxyServiceDescribeImagesHandler = app.openapi(
  postXAmzTargetPhotonAdminProxyServiceDescribeImagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
