import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceListHapgsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceListHapgsHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceListHapgsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
