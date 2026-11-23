import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateBatchInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeCreateBatchInferenceJobHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateBatchInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
