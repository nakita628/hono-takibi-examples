import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceStopNotebookExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceStopNotebookExecutionHandler = app.openapi(
  postXAmzTargetElasticMapReduceStopNotebookExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
