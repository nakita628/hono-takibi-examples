import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopNotebookInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopNotebookInstanceHandler = app.openapi(
  postXAmzTargetSageMakerStopNotebookInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
