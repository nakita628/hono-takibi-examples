import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDescribeHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceDescribeHsmHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDescribeHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
