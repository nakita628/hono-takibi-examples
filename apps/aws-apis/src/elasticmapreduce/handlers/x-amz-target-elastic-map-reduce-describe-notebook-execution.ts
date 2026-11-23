import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDescribeNotebookExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceDescribeNotebookExecutionHandler = app.openapi(
  postXAmzTargetElasticMapReduceDescribeNotebookExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
