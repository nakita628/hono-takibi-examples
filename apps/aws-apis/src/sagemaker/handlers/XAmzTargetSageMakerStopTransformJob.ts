import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopTransformJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopTransformJobHandler = app.openapi(
  postXAmzTargetSageMakerStopTransformJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
