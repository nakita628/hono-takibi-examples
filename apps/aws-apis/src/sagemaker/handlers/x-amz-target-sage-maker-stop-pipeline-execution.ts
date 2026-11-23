import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopPipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopPipelineExecutionHandler = app.openapi(
  postXAmzTargetSageMakerStopPipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
