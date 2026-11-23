import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListHubsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListHubsHandler = app.openapi(
  postXAmzTargetSageMakerListHubsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
