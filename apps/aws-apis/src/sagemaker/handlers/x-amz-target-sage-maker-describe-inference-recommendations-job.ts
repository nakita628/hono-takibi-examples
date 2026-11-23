import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeInferenceRecommendationsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeInferenceRecommendationsJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeInferenceRecommendationsJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
