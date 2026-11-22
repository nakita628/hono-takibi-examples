import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateTrialRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateTrialHandler = app.openapi(
  postXAmzTargetSageMakerUpdateTrialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
