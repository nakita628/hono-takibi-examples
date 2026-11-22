import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteActionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteActionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteActionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
