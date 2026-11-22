import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDescribeHapgRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceDescribeHapgHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDescribeHapgRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
