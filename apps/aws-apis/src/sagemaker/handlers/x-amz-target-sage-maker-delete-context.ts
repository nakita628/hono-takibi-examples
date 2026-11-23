import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteContextRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteContextHandler = app.openapi(
  postXAmzTargetSageMakerDeleteContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
