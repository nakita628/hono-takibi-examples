import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribePipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribePipelineExecutionHandler = app.openapi(
  postXAmzTargetSageMakerDescribePipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
