import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribePipelineHandler = app.openapi(
  postXAmzTargetSageMakerDescribePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
