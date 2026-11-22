import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListNotebookExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceListNotebookExecutionsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListNotebookExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
