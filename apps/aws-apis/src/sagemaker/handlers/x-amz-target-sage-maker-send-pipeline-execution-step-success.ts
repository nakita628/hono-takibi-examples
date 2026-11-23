import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerSendPipelineExecutionStepSuccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerSendPipelineExecutionStepSuccessHandler = app.openapi(
  postXAmzTargetSageMakerSendPipelineExecutionStepSuccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
