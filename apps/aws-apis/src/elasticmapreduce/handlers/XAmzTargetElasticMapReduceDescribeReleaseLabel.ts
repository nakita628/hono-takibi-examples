import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDescribeReleaseLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceDescribeReleaseLabelHandler = app.openapi(
  postXAmzTargetElasticMapReduceDescribeReleaseLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
