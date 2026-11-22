import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelCardVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListModelCardVersionsHandler = app.openapi(
  postXAmzTargetSageMakerListModelCardVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
