import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteImageHandler = app.openapi(
  postXAmzTargetSageMakerDeleteImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
