import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerSearchHandler = app.openapi(
  postXAmzTargetSageMakerSearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
