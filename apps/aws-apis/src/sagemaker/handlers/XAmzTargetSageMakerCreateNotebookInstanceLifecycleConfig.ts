import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
