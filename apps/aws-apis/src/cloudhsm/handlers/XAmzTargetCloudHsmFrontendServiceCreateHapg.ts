import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceCreateHapgRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceCreateHapgHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceCreateHapgRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
