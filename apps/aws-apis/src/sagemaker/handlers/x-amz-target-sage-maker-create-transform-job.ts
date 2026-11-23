import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateTransformJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateTransformJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateTransformJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
