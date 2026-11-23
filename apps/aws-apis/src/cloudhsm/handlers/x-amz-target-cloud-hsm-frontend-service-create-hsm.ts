import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceCreateHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceCreateHsmHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceCreateHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
