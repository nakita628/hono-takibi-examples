import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTrialsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListTrialsHandler = app.openapi(
  postXAmzTargetSageMakerListTrialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
