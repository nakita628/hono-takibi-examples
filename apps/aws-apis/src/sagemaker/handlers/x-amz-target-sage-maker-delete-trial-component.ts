import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteTrialComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteTrialComponentHandler = app.openapi(
  postXAmzTargetSageMakerDeleteTrialComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
