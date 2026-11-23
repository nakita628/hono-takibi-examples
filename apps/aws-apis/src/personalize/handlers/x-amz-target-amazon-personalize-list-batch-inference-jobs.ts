import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListBatchInferenceJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListBatchInferenceJobsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListBatchInferenceJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
