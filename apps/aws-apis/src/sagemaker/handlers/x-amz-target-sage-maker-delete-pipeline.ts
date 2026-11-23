import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeletePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeletePipelineHandler = app.openapi(
  postXAmzTargetSageMakerDeletePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
