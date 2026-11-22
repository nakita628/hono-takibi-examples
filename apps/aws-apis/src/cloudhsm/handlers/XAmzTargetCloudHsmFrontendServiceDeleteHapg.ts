import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDeleteHapgRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceDeleteHapgHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDeleteHapgRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
