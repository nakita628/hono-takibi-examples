import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateStudioLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateStudioLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerCreateStudioLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
