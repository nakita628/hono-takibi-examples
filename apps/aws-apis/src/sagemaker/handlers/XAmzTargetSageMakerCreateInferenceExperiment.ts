import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateInferenceExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateInferenceExperimentHandler = app.openapi(
  postXAmzTargetSageMakerCreateInferenceExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
