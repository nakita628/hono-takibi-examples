import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListInferenceRecommendationsJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListInferenceRecommendationsJobsHandler = app.openapi(
  postXAmzTargetSageMakerListInferenceRecommendationsJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
