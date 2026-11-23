import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceModifyLunaClientRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceModifyLunaClientHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceModifyLunaClientRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
