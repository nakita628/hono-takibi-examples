import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeInferenceExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeInferenceExperimentHandler = app.openapi(
  postXAmzTargetSageMakerDescribeInferenceExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
