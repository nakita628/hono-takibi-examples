import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteCodeRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteCodeRepositoryHandler = app.openapi(
  postXAmzTargetSageMakerDeleteCodeRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
