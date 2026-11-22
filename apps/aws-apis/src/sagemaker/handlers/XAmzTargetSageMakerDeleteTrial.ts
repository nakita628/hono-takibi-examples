import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteTrialRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteTrialHandler = app.openapi(
  postXAmzTargetSageMakerDeleteTrialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
