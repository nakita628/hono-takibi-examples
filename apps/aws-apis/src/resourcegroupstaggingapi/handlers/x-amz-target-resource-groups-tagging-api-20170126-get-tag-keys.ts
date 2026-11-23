import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetResourceGroupsTaggingApi20170126GetTagKeysHandler = app.openapi(
  postXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
