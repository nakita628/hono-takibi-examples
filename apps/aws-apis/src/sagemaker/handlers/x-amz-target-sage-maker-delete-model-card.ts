import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelCardRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteModelCardHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelCardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
