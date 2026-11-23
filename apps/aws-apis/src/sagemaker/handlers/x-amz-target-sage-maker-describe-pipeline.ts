import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribePipelineHandler = app.openapi(
  postXAmzTargetSageMakerDescribePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
