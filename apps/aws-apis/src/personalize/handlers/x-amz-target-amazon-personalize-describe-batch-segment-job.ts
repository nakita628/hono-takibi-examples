import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeBatchSegmentJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
