import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreatePipelineHandler = app.openapi(
  postXAmzTargetSageMakerCreatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
