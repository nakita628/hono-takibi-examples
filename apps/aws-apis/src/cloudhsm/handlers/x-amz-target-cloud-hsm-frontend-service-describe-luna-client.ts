import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceDescribeLunaClientRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceDescribeLunaClientHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceDescribeLunaClientRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
