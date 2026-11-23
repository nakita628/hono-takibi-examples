import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopInferenceExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopInferenceExperimentHandler = app.openapi(
  postXAmzTargetSageMakerStopInferenceExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
