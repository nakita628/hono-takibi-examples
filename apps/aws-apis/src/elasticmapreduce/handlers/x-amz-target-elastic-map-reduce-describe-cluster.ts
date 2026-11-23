import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDescribeClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceDescribeClusterHandler = app.openapi(
  postXAmzTargetElasticMapReduceDescribeClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
