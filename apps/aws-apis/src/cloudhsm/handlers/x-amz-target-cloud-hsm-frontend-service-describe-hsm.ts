import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDescribeHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceDescribeHsmHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDescribeHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
