import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateInferenceExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateInferenceExperimentHandler = app.openapi(
  postXAmzTargetSageMakerUpdateInferenceExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
