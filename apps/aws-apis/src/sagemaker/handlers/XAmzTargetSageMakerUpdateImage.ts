import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateImageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateImageHandler = app.openapi(
  postXAmzTargetSageMakerUpdateImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
