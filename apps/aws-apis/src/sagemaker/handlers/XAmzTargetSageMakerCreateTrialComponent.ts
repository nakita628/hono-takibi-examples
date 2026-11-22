import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateTrialComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateTrialComponentHandler = app.openapi(
  postXAmzTargetSageMakerCreateTrialComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
