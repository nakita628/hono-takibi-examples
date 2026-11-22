import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListStudioLifecycleConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListStudioLifecycleConfigsHandler = app.openapi(
  postXAmzTargetSageMakerListStudioLifecycleConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
