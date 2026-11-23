import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribePipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribePipelineExecutionHandler = app.openapi(
  postXAmzTargetSageMakerDescribePipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
