import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateContextRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateContextHandler = app.openapi(
  postXAmzTargetSageMakerCreateContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
