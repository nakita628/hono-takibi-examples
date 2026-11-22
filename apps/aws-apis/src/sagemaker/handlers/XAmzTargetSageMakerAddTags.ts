import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerAddTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerAddTagsHandler = app.openapi(
  postXAmzTargetSageMakerAddTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
