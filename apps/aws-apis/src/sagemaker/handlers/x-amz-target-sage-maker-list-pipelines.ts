import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListPipelinesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListPipelinesHandler = app.openapi(
  postXAmzTargetSageMakerListPipelinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
