import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDeleteLunaClientRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceDeleteLunaClientHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDeleteLunaClientRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
