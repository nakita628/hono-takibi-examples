import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDeleteDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
