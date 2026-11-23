import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateBatchSegmentJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeCreateBatchSegmentJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateBatchSegmentJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
