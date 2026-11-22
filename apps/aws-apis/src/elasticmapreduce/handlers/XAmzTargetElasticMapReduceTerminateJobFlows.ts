import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceTerminateJobFlowsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceTerminateJobFlowsHandler = app.openapi(
  postXAmzTargetElasticMapReduceTerminateJobFlowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
