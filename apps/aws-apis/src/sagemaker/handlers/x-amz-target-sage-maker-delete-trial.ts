import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteTrialRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteTrialHandler = app.openapi(
  postXAmzTargetSageMakerDeleteTrialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
