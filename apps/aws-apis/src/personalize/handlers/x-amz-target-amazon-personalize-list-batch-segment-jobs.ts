import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListBatchSegmentJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListBatchSegmentJobsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListBatchSegmentJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
