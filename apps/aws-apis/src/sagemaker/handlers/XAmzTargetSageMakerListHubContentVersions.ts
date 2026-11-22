import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListHubContentVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListHubContentVersionsHandler = app.openapi(
  postXAmzTargetSageMakerListHubContentVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
