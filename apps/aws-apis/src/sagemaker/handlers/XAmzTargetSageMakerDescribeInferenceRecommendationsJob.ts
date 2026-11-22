import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeInferenceRecommendationsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeInferenceRecommendationsJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeInferenceRecommendationsJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
