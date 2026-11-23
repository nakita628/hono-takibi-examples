import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribePipelineDefinitionForExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribePipelineDefinitionForExecutionHandler = app.openapi(
  postXAmzTargetSageMakerDescribePipelineDefinitionForExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
