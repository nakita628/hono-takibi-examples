import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListCodeRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListCodeRepositoriesHandler = app.openapi(
  postXAmzTargetSageMakerListCodeRepositoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
