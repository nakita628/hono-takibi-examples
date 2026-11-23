import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListInferenceRecommendationsJobStepsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListInferenceRecommendationsJobStepsHandler = app.openapi(
  postXAmzTargetSageMakerListInferenceRecommendationsJobStepsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
