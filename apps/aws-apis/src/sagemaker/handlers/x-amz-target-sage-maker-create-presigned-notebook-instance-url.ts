import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreatePresignedNotebookInstanceUrlHandler = app.openapi(
  postXAmzTargetSageMakerCreatePresignedNotebookInstanceUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
