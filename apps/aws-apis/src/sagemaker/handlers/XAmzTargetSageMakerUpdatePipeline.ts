import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdatePipelineHandler = app.openapi(
  postXAmzTargetSageMakerUpdatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
