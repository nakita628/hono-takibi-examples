import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDescribeJobFlowsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceDescribeJobFlowsHandler = app.openapi(
  postXAmzTargetElasticMapReduceDescribeJobFlowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
