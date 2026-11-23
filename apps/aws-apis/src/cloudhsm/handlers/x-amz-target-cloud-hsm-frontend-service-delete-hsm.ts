import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDeleteHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceDeleteHsmHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDeleteHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
