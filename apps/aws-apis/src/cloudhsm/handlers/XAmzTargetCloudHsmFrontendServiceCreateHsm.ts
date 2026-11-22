import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceCreateHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceCreateHsmHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceCreateHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
