import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceStartNotebookExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceStartNotebookExecutionHandler = app.openapi(
  postXAmzTargetElasticMapReduceStartNotebookExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
