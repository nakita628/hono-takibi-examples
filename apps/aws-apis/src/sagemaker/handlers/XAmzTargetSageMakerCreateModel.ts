import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateModelHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
