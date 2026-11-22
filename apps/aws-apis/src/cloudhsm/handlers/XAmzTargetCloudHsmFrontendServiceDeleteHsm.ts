import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDeleteHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceDeleteHsmHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDeleteHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
