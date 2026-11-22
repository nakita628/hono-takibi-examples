import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListInferenceRecommendationsJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListInferenceRecommendationsJobsHandler = app.openapi(
  postXAmzTargetSageMakerListInferenceRecommendationsJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
