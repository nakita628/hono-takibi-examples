import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdatePipelineHandler = app.openapi(
  postXAmzTargetSageMakerUpdatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
