import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListHubContentVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListHubContentVersionsHandler = app.openapi(
  postXAmzTargetSageMakerListHubContentVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
