import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelCardRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateModelCardHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelCardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
