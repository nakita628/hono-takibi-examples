import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerRetryPipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerRetryPipelineExecutionHandler = app.openapi(
  postXAmzTargetSageMakerRetryPipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
