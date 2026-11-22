import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStartInferenceExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStartInferenceExperimentHandler = app.openapi(
  postXAmzTargetSageMakerStartInferenceExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
