import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeBatchInferenceJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeBatchInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
