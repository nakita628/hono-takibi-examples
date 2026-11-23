import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateTrialComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateTrialComponentHandler = app.openapi(
  postXAmzTargetSageMakerCreateTrialComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
