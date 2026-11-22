import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateNotebookInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateNotebookInstanceHandler = app.openapi(
  postXAmzTargetSageMakerCreateNotebookInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
