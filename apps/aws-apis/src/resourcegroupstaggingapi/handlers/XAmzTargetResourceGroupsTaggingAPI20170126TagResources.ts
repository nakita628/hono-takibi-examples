import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetResourceGroupsTaggingAPI20170126TagResourcesHandler = app.openapi(
  postXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
