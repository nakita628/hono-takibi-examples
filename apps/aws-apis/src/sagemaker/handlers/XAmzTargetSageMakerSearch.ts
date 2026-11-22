import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerSearchHandler = app.openapi(
  postXAmzTargetSageMakerSearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
