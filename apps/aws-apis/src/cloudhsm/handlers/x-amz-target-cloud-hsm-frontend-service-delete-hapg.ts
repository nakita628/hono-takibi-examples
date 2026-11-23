import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDeleteHapgRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceDeleteHapgHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDeleteHapgRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
