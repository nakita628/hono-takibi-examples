import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListNotebookInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListNotebookInstancesHandler = app.openapi(
  postXAmzTargetSageMakerListNotebookInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
