import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTrialComponentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListTrialComponentsHandler = app.openapi(
  postXAmzTargetSageMakerListTrialComponentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
