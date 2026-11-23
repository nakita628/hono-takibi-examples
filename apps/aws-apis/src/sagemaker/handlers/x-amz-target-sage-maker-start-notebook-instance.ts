import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStartNotebookInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStartNotebookInstanceHandler = app.openapi(
  postXAmzTargetSageMakerStartNotebookInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
