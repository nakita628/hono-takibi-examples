import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAlgorithmsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListAlgorithmsHandler = app.openapi(
  postXAmzTargetSageMakerListAlgorithmsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
