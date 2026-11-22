import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribePipelineDefinitionForExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribePipelineDefinitionForExecutionHandler = app.openapi(
  postXAmzTargetSageMakerDescribePipelineDefinitionForExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
