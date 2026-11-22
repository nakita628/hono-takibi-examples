import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
