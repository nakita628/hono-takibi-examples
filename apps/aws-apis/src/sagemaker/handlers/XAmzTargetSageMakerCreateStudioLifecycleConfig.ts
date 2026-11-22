import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateStudioLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateStudioLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerCreateStudioLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
