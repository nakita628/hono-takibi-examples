import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteTagsHandler = app.openapi(
  postXAmzTargetSageMakerDeleteTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
