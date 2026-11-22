import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceModifyHsmRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceModifyHsmHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceModifyHsmRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
