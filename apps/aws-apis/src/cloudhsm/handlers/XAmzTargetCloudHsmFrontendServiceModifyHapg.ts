import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceModifyHapgRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceModifyHapgHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceModifyHapgRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
