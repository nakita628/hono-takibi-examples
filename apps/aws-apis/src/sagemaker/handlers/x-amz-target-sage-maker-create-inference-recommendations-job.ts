import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateInferenceRecommendationsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateInferenceRecommendationsJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateInferenceRecommendationsJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
