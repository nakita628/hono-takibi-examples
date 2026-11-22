import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesHandler = app.openapi(
  postXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
