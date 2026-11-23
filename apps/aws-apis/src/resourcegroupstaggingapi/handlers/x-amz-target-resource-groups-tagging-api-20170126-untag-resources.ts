import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetResourceGroupsTaggingApi20170126UntagResourcesHandler = app.openapi(
  postXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
