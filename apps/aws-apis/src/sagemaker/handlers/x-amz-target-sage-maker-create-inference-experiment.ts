import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateInferenceExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateInferenceExperimentHandler = app.openapi(
  postXAmzTargetSageMakerCreateInferenceExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
