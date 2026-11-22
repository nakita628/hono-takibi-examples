import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateCodeRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateCodeRepositoryHandler = app.openapi(
  postXAmzTargetSageMakerUpdateCodeRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
