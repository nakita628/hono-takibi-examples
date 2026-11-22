import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
