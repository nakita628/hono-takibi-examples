import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDescribeReleaseLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceDescribeReleaseLabelHandler = app.openapi(
  postXAmzTargetElasticMapReduceDescribeReleaseLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
