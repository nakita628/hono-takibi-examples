import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListInferenceExperimentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListInferenceExperimentsHandler = app.openapi(
  postXAmzTargetSageMakerListInferenceExperimentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
