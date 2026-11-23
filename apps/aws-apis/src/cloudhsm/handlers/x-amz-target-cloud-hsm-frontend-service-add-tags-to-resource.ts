import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceAddTagsToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceAddTagsToResourceHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceAddTagsToResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
