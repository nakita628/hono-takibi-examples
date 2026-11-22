import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListHubsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListHubsHandler = app.openapi(
  postXAmzTargetSageMakerListHubsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
