import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListPipelinesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListPipelinesHandler = app.openapi(
  postXAmzTargetSageMakerListPipelinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
