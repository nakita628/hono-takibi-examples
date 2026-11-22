import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceListHsmsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceListHsmsHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceListHsmsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
