import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetResourceGroupsTaggingApi20170126GetResourcesHandler = app.openapi(
  postXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
