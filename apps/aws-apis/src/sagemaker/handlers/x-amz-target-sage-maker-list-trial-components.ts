import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTrialComponentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListTrialComponentsHandler = app.openapi(
  postXAmzTargetSageMakerListTrialComponentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
