import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListNotebookInstanceLifecycleConfigsHandler = app.openapi(
  postXAmzTargetSageMakerListNotebookInstanceLifecycleConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
