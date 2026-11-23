import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListPipelineExecutionStepsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListPipelineExecutionStepsHandler = app.openapi(
  postXAmzTargetSageMakerListPipelineExecutionStepsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
