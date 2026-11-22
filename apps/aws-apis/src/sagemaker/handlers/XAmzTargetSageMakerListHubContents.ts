import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListHubContentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListHubContentsHandler = app.openapi(
  postXAmzTargetSageMakerListHubContentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
