import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopInferenceExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopInferenceExperimentHandler = app.openapi(
  postXAmzTargetSageMakerStopInferenceExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
