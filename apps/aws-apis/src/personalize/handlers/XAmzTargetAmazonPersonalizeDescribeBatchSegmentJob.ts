import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeBatchSegmentJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeBatchSegmentJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
