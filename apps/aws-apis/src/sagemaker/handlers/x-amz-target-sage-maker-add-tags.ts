import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerAddTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerAddTagsHandler = app.openapi(
  postXAmzTargetSageMakerAddTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
