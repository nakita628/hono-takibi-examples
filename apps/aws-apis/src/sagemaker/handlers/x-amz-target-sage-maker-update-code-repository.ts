import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateCodeRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateCodeRepositoryHandler = app.openapi(
  postXAmzTargetSageMakerUpdateCodeRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
