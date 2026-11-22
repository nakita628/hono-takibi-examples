import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDescribeStudioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceDescribeStudioHandler = app.openapi(
  postXAmzTargetElasticMapReduceDescribeStudioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
