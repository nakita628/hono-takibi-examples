import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteInferenceExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteInferenceExperimentHandler = app.openapi(
  postXAmzTargetSageMakerDeleteInferenceExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
