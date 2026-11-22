import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListPipelineExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListPipelineExecutionsHandler = app.openapi(
  postXAmzTargetSageMakerListPipelineExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
