import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerDeleteNotebookInstanceLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
