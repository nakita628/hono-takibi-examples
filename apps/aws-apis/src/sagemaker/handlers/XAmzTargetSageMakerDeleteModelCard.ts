import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelCardRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteModelCardHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelCardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
