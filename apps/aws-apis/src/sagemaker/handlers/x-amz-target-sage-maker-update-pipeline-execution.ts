import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdatePipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdatePipelineExecutionHandler = app.openapi(
  postXAmzTargetSageMakerUpdatePipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
