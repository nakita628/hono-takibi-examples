import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateImageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateImageHandler = app.openapi(
  postXAmzTargetSageMakerCreateImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
