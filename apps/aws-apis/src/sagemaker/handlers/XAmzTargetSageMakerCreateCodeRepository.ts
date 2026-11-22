import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateCodeRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateCodeRepositoryHandler = app.openapi(
  postXAmzTargetSageMakerCreateCodeRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
