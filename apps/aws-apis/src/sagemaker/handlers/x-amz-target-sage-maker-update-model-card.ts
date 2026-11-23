import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateModelCardRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateModelCardHandler = app.openapi(
  postXAmzTargetSageMakerUpdateModelCardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
