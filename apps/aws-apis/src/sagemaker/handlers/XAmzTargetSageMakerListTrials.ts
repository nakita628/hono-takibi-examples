import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTrialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListTrialsHandler = app.openapi(
  postXAmzTargetSageMakerListTrialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
