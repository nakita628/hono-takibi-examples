import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateTrialComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateTrialComponentHandler = app.openapi(
  postXAmzTargetSageMakerUpdateTrialComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
