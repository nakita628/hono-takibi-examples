import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateContextRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateContextHandler = app.openapi(
  postXAmzTargetSageMakerCreateContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
