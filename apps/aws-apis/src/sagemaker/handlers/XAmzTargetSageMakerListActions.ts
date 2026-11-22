import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListActionsHandler = app.openapi(
  postXAmzTargetSageMakerListActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
