import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListPipelineParametersForExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListPipelineParametersForExecutionHandler = app.openapi(
  postXAmzTargetSageMakerListPipelineParametersForExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
