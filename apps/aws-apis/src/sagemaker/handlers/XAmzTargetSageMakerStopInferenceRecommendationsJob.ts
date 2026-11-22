import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopInferenceRecommendationsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopInferenceRecommendationsJobHandler = app.openapi(
  postXAmzTargetSageMakerStopInferenceRecommendationsJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
