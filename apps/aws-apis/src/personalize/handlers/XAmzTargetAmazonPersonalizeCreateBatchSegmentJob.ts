import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateBatchSegmentJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateBatchSegmentJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateBatchSegmentJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
