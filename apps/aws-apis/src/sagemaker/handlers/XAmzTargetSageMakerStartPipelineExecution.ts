import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStartPipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStartPipelineExecutionHandler = app.openapi(
  postXAmzTargetSageMakerStartPipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
