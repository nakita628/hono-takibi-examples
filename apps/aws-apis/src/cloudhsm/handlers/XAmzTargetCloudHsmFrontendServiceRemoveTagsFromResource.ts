import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
