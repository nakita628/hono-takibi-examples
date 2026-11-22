import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteNotebookInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteNotebookInstanceHandler = app.openapi(
  postXAmzTargetSageMakerDeleteNotebookInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
