import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelCardVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListModelCardVersionsHandler = app.openapi(
  postXAmzTargetSageMakerListModelCardVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
