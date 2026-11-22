import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListModelsHandler = app.openapi(
  postXAmzTargetSageMakerListModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
