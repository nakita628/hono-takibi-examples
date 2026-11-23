import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListNotebookExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceListNotebookExecutionsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListNotebookExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
