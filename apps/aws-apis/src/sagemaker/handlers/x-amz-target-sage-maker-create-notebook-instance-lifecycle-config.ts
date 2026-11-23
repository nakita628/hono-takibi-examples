import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerCreateNotebookInstanceLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
