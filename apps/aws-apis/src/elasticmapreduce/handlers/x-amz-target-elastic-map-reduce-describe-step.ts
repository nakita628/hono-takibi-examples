import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDescribeStepRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceDescribeStepHandler = app.openapi(
  postXAmzTargetElasticMapReduceDescribeStepRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
