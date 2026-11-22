import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateNotebookInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateNotebookInstanceHandler = app.openapi(
  postXAmzTargetSageMakerUpdateNotebookInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
