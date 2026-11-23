import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateTrialRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateTrialHandler = app.openapi(
  postXAmzTargetSageMakerUpdateTrialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
