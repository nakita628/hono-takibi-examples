import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteTagsHandler = app.openapi(
  postXAmzTargetSageMakerDeleteTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
