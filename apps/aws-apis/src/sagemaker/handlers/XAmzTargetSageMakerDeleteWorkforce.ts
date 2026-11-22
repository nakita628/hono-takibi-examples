import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteWorkforceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteWorkforceHandler = app.openapi(
  postXAmzTargetSageMakerDeleteWorkforceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
