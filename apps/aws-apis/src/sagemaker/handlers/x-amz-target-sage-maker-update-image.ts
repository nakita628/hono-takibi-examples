import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateImageHandler = app.openapi(
  postXAmzTargetSageMakerUpdateImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
