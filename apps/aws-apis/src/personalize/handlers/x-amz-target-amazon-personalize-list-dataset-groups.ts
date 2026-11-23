import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListDatasetGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListDatasetGroupsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListDatasetGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
