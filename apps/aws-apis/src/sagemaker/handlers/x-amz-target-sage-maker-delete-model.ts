import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteModelHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
