import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerSendPipelineExecutionStepFailureRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerSendPipelineExecutionStepFailureHandler = app.openapi(
  postXAmzTargetSageMakerSendPipelineExecutionStepFailureRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
