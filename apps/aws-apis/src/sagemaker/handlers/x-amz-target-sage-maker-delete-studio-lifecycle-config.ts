import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteStudioLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteStudioLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerDeleteStudioLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
