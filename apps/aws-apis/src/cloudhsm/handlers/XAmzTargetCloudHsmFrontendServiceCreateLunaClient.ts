import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceCreateLunaClientRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceCreateLunaClientHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceCreateLunaClientRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
