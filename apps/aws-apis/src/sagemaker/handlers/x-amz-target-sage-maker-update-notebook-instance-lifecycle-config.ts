import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerUpdateNotebookInstanceLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
