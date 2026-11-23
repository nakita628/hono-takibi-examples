import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceTerminateJobFlowsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceTerminateJobFlowsHandler = app.openapi(
  postXAmzTargetElasticMapReduceTerminateJobFlowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
