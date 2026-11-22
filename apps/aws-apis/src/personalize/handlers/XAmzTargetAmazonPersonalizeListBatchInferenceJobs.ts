import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListBatchInferenceJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListBatchInferenceJobsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListBatchInferenceJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
