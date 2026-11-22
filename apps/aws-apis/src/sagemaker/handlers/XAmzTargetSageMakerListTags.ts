import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListTagsHandler = app.openapi(
  postXAmzTargetSageMakerListTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
