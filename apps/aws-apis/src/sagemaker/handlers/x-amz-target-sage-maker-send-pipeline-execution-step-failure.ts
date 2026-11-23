import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerSendPipelineExecutionStepFailureRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerSendPipelineExecutionStepFailureHandler = app.openapi(
  postXAmzTargetSageMakerSendPipelineExecutionStepFailureRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
