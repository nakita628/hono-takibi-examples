import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListPipelineExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListPipelineExecutionsHandler = app.openapi(
  postXAmzTargetSageMakerListPipelineExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
