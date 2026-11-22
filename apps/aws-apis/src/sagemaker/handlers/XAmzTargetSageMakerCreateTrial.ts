import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateTrialRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateTrialHandler = app.openapi(
  postXAmzTargetSageMakerCreateTrialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
